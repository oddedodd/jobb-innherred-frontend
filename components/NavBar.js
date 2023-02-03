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
    </header>
    </>
    );
};

export default NavBar
