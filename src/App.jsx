import { Header } from "./components/Header"

import './global.css'
import style from './App.module.css'

import { Sidebar } from './components/Sidebar';

import { Post } from "./components/Post";
export function App() {

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Elvis" content="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellat eos consequuntur quos blanditiis iusto 
    " />
          <Post author="Elvis" content="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis repellat eos consequuntur quos blanditiis iusto 
    " />
        </main>
      </div>
    </>
  )
}

