import { Flex, Heading, Wrap, WrapItem, Stack, Text, Image, Box } from "@chakra-ui/react";
import Citie from "./Citie";

interface TopCitiesProps{
  cities: {
    name: string,
    country: string,
    banner: string,
    flag: string,
  }[]
}

export default function TopCities( { cities }: TopCitiesProps) {

  console.log(cities)
  return(
    <>
      <Heading>Cidades +100</Heading>
      <Wrap>
        {cities.map(citie => (   
          <WrapItem pr='28px'>
            <Citie 
              name={citie.name}
              country={citie.country}
              banner={citie.banner} 
              flag={citie.flag}              
            />
          </WrapItem>     
        ))}

      </Wrap>
    </>
  )
}