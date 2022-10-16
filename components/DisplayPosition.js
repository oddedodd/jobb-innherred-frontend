import { urlFor } from "../lib/sanity";
import styles from "../styles/displayPosition.module.css"
import { PortableText } from "@portabletext/react";

const ptComponents = {
  
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <img
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).width(980).height(300).fit('max').auto('format')}
          />
        )
      }   
    }
    
  }

const displayPosition = ({ title, employer, mainImage, employerLogo, body, expiresOn }) => {

    return (
       <>
        <img 
            className={styles.main_Image}
            alt={title + ' image'}
            src={urlFor(mainImage)}
        />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{ title }</h1>  
          <img 
              className={styles.logo_Image}
              alt={title + ' image'}
              src={urlFor(employerLogo)}
          />
          <div>{ employer }</div>
        </div>
        <hr className={styles.divider}></hr>
        <div>
            <PortableText 
            value={body}
            components={ptComponents}
            />
        </div>
        <p>Søknadsfrist: {new Date(expiresOn).toLocaleDateString('no-NO', {month: 'long', day: 'numeric', year: 'numeric'})}</p>
       </>
    )

}

export default displayPosition