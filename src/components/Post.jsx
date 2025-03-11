import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import style from './Post.module.css'
import { useState } from 'react'



export function Post({ author, content, publishedAt }) {


    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event) {

        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event) {
        event.target.setCustomValidity('Esse campo é obrigatório!!')
    }
    function deleteComment(commentToDelete) {
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

                    <Avatar src={author.avatarUrl} alt="" />
                    <div className={style.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}

                </time>

            </header>
            <div className={style.content}>


                {content.map((line) => {
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
