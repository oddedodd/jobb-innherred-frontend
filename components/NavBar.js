import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from "next/link";

const NavBar = () => {
    return (
     <>
     <header className={styles.menu_container}>
        <Link href="/">
            <a><Image src="/jobb-innherred_logo.png" alt="Jobb i Innherred" width="300" height="30" className="logo"/></a>
        </Link>
        <nav>
            <ul>
                <li className={styles.list_item}><a href="#">Hjem</a></li>
                <li className={styles.list_item}><a href="#">Om</a></li>
                <li className={styles.list_item}><a href="#">Kontakt</a></li>
            </ul>
        </nav>          
    </header>
    </>
    );
};

export default NavBar
