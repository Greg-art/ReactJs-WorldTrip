import { GetStaticProps } from "next";
import { AlertDescription, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import BannerContinent from "../../components/BannerContinent";
import Header from "../../components/Header";
import TopCities from "../../components/TopCities/Index";
import { createClient } from "../../services/prismicio";

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

  return(
    <Stack
      bg='white.50'
      w='100%'
      align='center'
      mb='100px'
    >
      <Header />
      <BannerContinent title={continent.title}/>
      <Stack
        maxW="1240px"
        position='relative'
        px='10'
      >
        <Flex py='16'>
          <Text w='50%' lineHeight='36px' fontSize='lg' fontWeight='medium' textAlign='justify'>
            {continent.description}
          </Text>

          <Box mx='16' />

          <Stack direction='row' w='50%' justify='space-between'>
            <Stack justify='center' align='center'>
              <Text
                color='yellow.500'
                fontWeight='bold'
                fontSize="5xl"
              >{continent.countriesAmount}</Text>
              <Text fontWeight='bold'>países</Text>
            </Stack>
            <Stack justify='center' align='center'>
              <Text
                color='yellow.500'
                fontWeight='bold'
                fontSize="5xl"
              >{continent.languagesAmount}</Text>
              <Text fontWeight='bold'>línguas</Text>
            </Stack>
            <Stack justify='center' align='center'>
              <Text
                color='yellow.500'
                fontWeight='bold'
                fontSize="5xl"
              >{continent.citiesAmount}</Text>
              <Text fontWeight='bold'>cidades +100</Text>
            </Stack>
          </Stack>
        </Flex> 

        <TopCities cities={continent.cities}/>
      </Stack>
    </Stack>
   );
}
  





export async function getStaticPaths(){

  // const client = createClient();

  // const pages = await client.getAllByType("page");


  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ previewData, params }) => {
  const slug = params.slug as string;

  const client = createClient({ previewData })
  
  const response = await client.getByUID('continent', slug)

  // console.log(JSON.stringify(response,null,2))

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

  console.log(continent)


  return {
    props: { continent },
    revalidate: 60 * 30,
  }

}
