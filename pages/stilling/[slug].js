import groq from "groq";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";
import { getClient, sanityClient } from "../../lib/sanity.server";
import Head from "next/head";
import { NextSeo } from "next-seo";
import NavBar from "../../components/NavBar";
import DisplayPosition from "../../components/DisplayPosition";



const Position = ({ title, employer, mainImage, employerLogo, body, expiresOn }) => {
    
    return (
        <>
        <NextSeo
            title="Jobb Innherred"
            description={`${employer} søker ${title}`}
            openGraph={{
                type: 'website',
                title: 'Jobb Innherred',
                description: `${employer} søker ${title}`,
                images: [
                  {
                    url: `${urlFor(mainImage)}`,
                    width: 640,
                    height: 360,
                    alt: `${employer} søker ${title}`,
                  }
                ]
              }}
        />
        <NavBar />
        <div className="position-container">
            <DisplayPosition title={title} employer={employer} mainImage={mainImage} employerLogo={employerLogo} body={body} expiresOn={expiresOn}  />
        </div>
        </>
    )
}

export const getServerSideProps = async(pageContext) => {
    const pageSlug = pageContext.query.slug;

    const query = groq`*[_type == "position" && slug.current == $pageSlug][0]{
        title,
        mainImage,
        "employer": company->title,
        "employerLogo": company->mainImage,
        body,
        publishedAt,
        expiresOn
    }`

    const position = await sanityClient.fetch(query, { pageSlug })

    if (!position) {
        return {
            props: null,
            notFound: true,
        }
    } else {
        return {
            props: {
                title: position.title,
                mainImage: position.mainImage,
                employer: position.employer,
                employerLogo: position.employerLogo,
                body: position.body,
                publishedAt: position.publishedAt,
                expiresOn: position.expiresOn,                
            }
        }
    }
}
export default Position;