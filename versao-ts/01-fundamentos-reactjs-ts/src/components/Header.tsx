import styles from './Header.module.css'

import igniteLogo from '../assets/images/ignite-simbol.svg'


export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logo Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}
