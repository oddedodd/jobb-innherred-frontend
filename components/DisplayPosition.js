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

const displayPosition = ({ title, mainImage, employerLogo, body }) => {

    return (
       <>
        <img 
            className={styles.main_Image}
            alt={title + ' image'}
            src={urlFor(mainImage)}
        />
        <h1>{ title }</h1>
        <img 
            className={styles.main_Image}
            alt={title + ' image'}
            src={urlFor(employerLogo)}
        />
        <div>
            <PortableText 
            value={body}
            components={ptComponents}
            />
        </div>
       </>
    )

}

export default displayPosition