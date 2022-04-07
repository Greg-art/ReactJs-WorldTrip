import { GetStaticProps } from "next";

export default function Continent({name}) {

  return(
    <h1>{name}</h1>
   );
}
  
export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params;

  return {
    props: {
      name, 
    },
    revalidate: 60 * 30,  // 30 minute 
  }
}