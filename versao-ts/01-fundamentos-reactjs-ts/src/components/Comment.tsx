import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'



interface CommentProps {
    content: string
    onDeleteComment: (comment: string) => void
}


export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {

        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })

    }
    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/antonio-elvis-dev.png" alt='' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Elvis </strong>
                            <time title='11 de Dezembro às 08:13' dateTime="2025-01-02 ">Cerca de há 1h atrás</time>

                        </div>
                        <button title='Deletar comentário'

                            onClick={handleDeleteComment}

                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={24} />
                        Aplaudir <span>{likeCount}</span>
                    </button>

                </footer>
            </div>
        </div>
    )
}