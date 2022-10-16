import { urlFor } from "../lib/sanity"
import styles from "../styles/Card.module.css";
import Link from "next/link";

const Card = ({ position }) => {
    return (
        <div className={styles.position_container}>
            <Link href={`/stilling/${encodeURIComponent(position.slug.current)}`}>
                <a>
                <img 
                    className={styles.main_Image}
                    alt={position.title + ' image'}
                    src={urlFor(position.mainImage)}
                />
                </a>
            </Link>
            <Link href={`/stilling/${encodeURIComponent(position.slug.current)}`}>
            <a className={styles.titleLink}><h2 className={styles.title}>{position.title}</h2></a>
            </Link>
            <div className="info-container">
                <p>{position.employer}</p>
            </div>
           
        </div>
    )
}

// Dette er en test for Git

export default Card