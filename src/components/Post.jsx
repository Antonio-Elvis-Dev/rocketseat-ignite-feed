import style from './Post.module.css'


export function Post({ author, content }) {
    return (
        <article className={style.post}>

            <header >
                <div className={style.author}>

                    <img className={style.avatar} src="https://github.com/antonio-elvis-dev.png" alt="" />
                    <div className={style.authorInfo}>
                        <strong>Elvis</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Dezembro às 08:13' dateTime="2025-01-02 ">Publicado há 1h</time>

            </header>
            <div className={style.content}>
                <p>Fala galeraa 👋</p>

                <p>   Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p> 👉 <a href="#"> jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto </a> 
                    <a href="#"> #nlw </a>
                    <a href="#">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}
