import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import style from './Post.module.css'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'


interface Author {
    avatarUrl: string
    name: string
    role: string
}

interface Content {
    type: 'paragraph' | 'link'
    content: string
}

interface Post  {
    author: Author
    publishedAt: Date
    content: Content[]

}

interface PostProps {
    post: Post
}

export function Post({post}: PostProps) {


    const [comments, setComments] = useState<string[]>([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {

        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!!')
    }
    function deleteComment(commentToDelete: string) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })

        setComments(commentWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length <= 3




    return (
        <article className={style.post}>

            <header >
                <div className={style.author}>

                    <Avatar src={post.author.avatarUrl} />
                    <div className={style.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={post.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}

                </time>

            </header>
            <div className={style.content}>


                {post.content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#" >{line.content}</a></p>
                    }
                })}

            </div>
            <form onSubmit={handleCreateNewComment} className={style.commentForm}>
                <strong>Deixe seu feednack</strong>
                <textarea name="comment" placeholder='Deixe seu comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                    minLength={3}
                />
                <footer>

                    <button type='submit' disabled={isNewCommentEmpty} >Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {comments.map((comment) => {
                    return (

                        <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    )
                })}

            </div>
        </article>
    )
}
