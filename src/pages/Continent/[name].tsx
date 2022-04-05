import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";


interface ContinentProps{
  id: number,
  name: string,
  image: string
}

export default function Continent({ id, name, image }: ContinentProps){

  return(
    <h1>{name}</h1>
    );
}
  

export const getServerSideProps: GetServerSideProps = async({ req, params}) => {
  const { name } = params;
  const [continents, setContinents] = useState([])

  useEffect(() =>{
    fetch("/api/continents")
    .then((res) => res.json())
    .then((json) => setContinents(json.continents) )
    .catch(err => console.log(err))
  },[])

  const continent = continents.filter(continent => {continent.name === name})

  return {
    props: {
      continent,
    }
  }
}