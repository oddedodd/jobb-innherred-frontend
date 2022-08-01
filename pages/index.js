import Navbar from "../components/NavBar";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";

const Home = ({ positions }) => {
  return (
    <div className="dashboard">
      <Head>
        <title>Jobb i Namdalen - ledige stillinger fra namdalen</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
        <div className="positions-container">
          {positions?.map((position) => (
          
                <Card position={position} />
             
          ))}
        </div>
    </div> 
  )
}

export async function getServerSideProps({ preview = false}){
  const positions = await getClient(preview).fetch(groq`
    *[_type == "position"] | order(publishedAt desc){
      _id,
      title,
      slug,
      mainImage,
      "employer": company->title,
      body,
      publishedAt,
      expiresOn
    }
  `)
  return {
    props: {
      positions,
    },
  }
}

export default Home;
