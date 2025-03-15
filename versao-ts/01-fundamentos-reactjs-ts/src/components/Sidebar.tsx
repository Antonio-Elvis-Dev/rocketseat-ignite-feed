import { Avatar } from './Avatar'
import style from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar() {
    return (
        <aside className={style.sidebar}>

            <img
            className={style.cover}
            src="https://img.freepik.com/fotos-gratis/close-up-do-teclado-usado-pelo-engenheiro-de-software-programando-em-casa_482257-88598.jpg?t=st=1735826943~exp=1735830543~hmac=4186ebc8f3a32361b3b2ec2dedef4c0b4fb04f78519458283bb4d7d6d3fbf8f0&w=740" alt="" />

            <div className={style.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/102705791?v=4" />
                <strong>Elvis</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}
