import styles from '../styles/NavBar.module.css'
import Image from 'next/image'

const NavBar = () => {
    return (
     <>
     <header className={styles.menu_container}>
        <Image src="/jin-logo.svg" alt="Jobb i Namdalen logo" width="200" height="50" className="logo"/>
        <nav>
            <ul>
                <li className={styles.list_item}><a href="#">About</a></li>
                <li className={styles.list_item}><a href="#">Services</a></li>
                <li className={styles.list_item}><a href="#">Contact</a></li>
            </ul>
        </nav>          
    </header>
    </>
    );
};

export default NavBar
