import { Header } from "./components/Header"

import './global.css'
import style from './App.module.css'

import { Sidebar } from './components/Sidebar';

import { Post, PostType } from "./components/Post";




const posts:PostType[] = [

  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Antonio-Elvis-Dev.png",
      name: "Elvis",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },

      { type: "link", content: "👉  jane.design / doctorcare" }


    ],
    publishedAt: new Date('2025-03-01 20:20:20')

  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Antonio-Elvis-Dev.png",

      name: "Leticia",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },

      { type: "link", content: "👉  jane.design / doctorcare" }


    ],
    publishedAt: new Date('2025-03-01 20:20:20')

  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/Antonio-Elvis-Dev.png",

      name: "Wemerson",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },

      { type: "link", content: "👉  jane.design / doctorcare" }


    ],
    publishedAt: new Date('2025-03-01 20:20:20')
  },
]


export function App() {



  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>

          {posts.map((post) => {
            return <Post
              key={post.id}
              post={post} />
          }
          )}


        </main>
      </div>
    </>
  )
}

