import { urlFor } from "../lib/sanity"
import styles from "../styles/Card.module.css";
import Link from "next/link";

const Card = ({ position }) => {
    console.log(position.slug.current)
    return (
        <div className={styles.position_container}>
            <Link href={`/stilling/${encodeURIComponent(position.slug.current)}`}>
            <a><h2>{position.title}</h2></a>
            </Link>
            <p>Søknadsfrist: {new Date(position.expiresOn).toLocaleDateString('no-NO', {month: 'long', day: 'numeric', year: 'numeric'})}</p>

            <Link href={`/stilling/${encodeURIComponent(position.slug.current)}`}>
                <a>
                <img 
                    className={styles.main_Image}
                    alt={position.title + ' image'}
                    src={urlFor(position.mainImage)}
                />
                </a>
            </Link>

            <div className="info-container">
                <p>Arbeidsgiver: {position.employer}</p>
            </div>

        </div>
    )
}

export default Card