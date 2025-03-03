import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/antonio-elvis-dev.png" alt="" srcset="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Elvis </strong>
                            <time title='11 de Dezembro às 08:13' dateTime="2025-01-02 ">Cerca de há 1h atrás</time>

                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bem Devon, parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={24}/>
                        Aplaudir <span>20</span>
                    </button>
                    
                </footer>
            </div>
        </div>
    )
}