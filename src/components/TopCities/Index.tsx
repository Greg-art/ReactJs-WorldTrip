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

  return(
    <>
      <Heading fontSize={{base:'2xl' ,lg: '3xl'}} pb={{lg:'10px'}}>Cidades +100</Heading>
      <Wrap justify='center'>
        {cities.map(citie => (   
          <WrapItem pr={{base:'0px',sm:'12px',lg:'28px'}}>
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