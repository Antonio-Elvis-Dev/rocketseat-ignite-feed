import { Header } from "./components/Header"

import './global.css'
import style from './App.module.css'

import { Sidebar } from './components/Sidebar';

import { Post } from "./components/Post";




const posts = [

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
    publishedAt: new Date('2024-01-01 20:20:20')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/letbarros2.png",
      name: "Leticia",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },

      { type: "link", content: "👉  jane.design / doctorcare" }


    ],
    publishedAt: new Date('2024-01-01 20:20:20')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/WemersonGomes10.png",
      name: "Wemerson",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },

      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat.O nome do projeto é DoctorCare 🚀" },

      { type: "link", content: "👉  jane.design / doctorcare" }


    ],
    publishedAt: new Date('2024-01-01 20:20:20')
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
            author={post.author} 
            content={post.content} 
            publishedAt={post.publishedAt}/>
          }
          )}


        </main>
      </div>
    </>
  )
}

