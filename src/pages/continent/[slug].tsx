import { GetStaticProps } from "next";
import { AlertDescription, Box, Flex, Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import BannerContinent from "../../components/continent/BannerContinent";
import Header from "../../components/Header";
import TopCities from "../../components/TopCities/Index";
import { createClient } from "../../services/prismicio";
import Caracteristic from "../../components/continent/Caracteristic";
import Head from "next/head";

interface ContinentProps{
  continent:{
    slug: string;
    title: string;
    // subtitle: string;
    description: string,
    countriesAmount: number,
    languagesAmount: number,
    citiesAmount: number,
    cities: {
      name: string,
      country: string,
      banner: string,
      flag: string,
    }[]
  }
}

export default function Continent({continent}: ContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const tooltipText = '100 cidades mais visitadas do mundo'

  return(
    <Stack
      bg='white.50'
      w='100%'
      align='center'
      mb='100px'
    >
      <Head>
        <title>WorldTrip | {continent.title}</title>
      </Head>
      <Header />
      <BannerContinent title={continent.title}/>
      <Stack
        maxW="1240px"
        position='relative'
        px='10'
      >
        <Stack spacing={{base:'10',lg: '40'}} pb='16' pt={['8','16']} direction={{base: 'column', md: 'row'}} align='center'>
          <Text
            w={{base: '100%', md: '50%'}}
            lineHeight='36px'
            fontSize={[ 'md','lg']}
            fontWeight='medium'
            textAlign='justify'>
            {continent.description}
          </Text>

          {}

          <Stack direction='row' w={{base:'100%', sm: '80%', md: '50%'}} justify='space-between'>
            <Caracteristic name='países' number={continent.countriesAmount}/>
            <Caracteristic name='línguas' number={continent.languagesAmount}/>
            <Caracteristic name='cidades +100' number={continent.citiesAmount} tooltip={tooltipText}/> 
          </Stack>
        </Stack> 

        <TopCities cities={continent.cities}/>
      </Stack>
    </Stack>
   );
}
  


export async function getStaticPaths({ previewData }){

  const client = createClient({ previewData });

  const response = await client.getAllByType("continent");

  const paths = response.map( page => {
      return { 
        params: {
          slug: page.uid,
        } 
      }
    }
  ) 

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ previewData, params }) => {
  const slug = params.slug as string;

  const client = createClient({ previewData })
  
  const response = await client.getByUID('continent', slug)

  const continent = {
    slug: response.uid,
    title: response.data.title[0].text,
    // subtitle: 'oi',
    description: response.data.description[0].text,
    countriesAmount: response.data.countries,
    languagesAmount: response.data.languages,
    citiesAmount: response.data.cities,
    cities: response.data.citie.map( citie => {
      return{
        name: citie.citieName[0].text,
        country: citie.citieCountry[0].text,
        banner: citie.banner.url,
        flag: citie.countryFlag.url
      }
    })
  }



  return {
    props: { continent },
    revalidate: 60 * 30,
  }

}
