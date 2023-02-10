import Navbar from "../components/NavBar";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import Head from "next/head";
import Link from "next/link";
import Card from "../components/Card";

const Home = ({ positions }) => {
  // console.log(positions);
  return (
    <div className="dashboard">
      <Head>
        <title>Jobb Innherred - ledige stillinger fra hele innherred</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
        <div className="positions-container">
          {positions?.map((position) => (
            <Card key={position._id} position={position} />
          ))}
        </div>
    </div> 
  )
}

export async function getServerSideProps({ preview = false}){
  let today = new Date();
  let dd = today.getDate();

  let mm = today.getMonth()+1; 
  const yyyy = today.getFullYear();
  if(dd<10) {
      dd=`0${dd}`;
  } 

  if(mm<10) {
      mm=`0${mm}`;
  }

  today = `${yyyy}-${mm}-${dd}`;

  const positions = await getClient(preview).fetch(groq`
    *[_type == "position" && expiresOn >= "${today}"] | order(_createdAt desc){
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
