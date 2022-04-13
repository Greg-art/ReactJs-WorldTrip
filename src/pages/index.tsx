import { Box, Stack, Text } from '@chakra-ui/react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Cards from '../components/Cards/Index'
import Slide from '../components/Slide/Index'
import { createClient } from '../services/prismicio'

interface HomeProps{
  continents:{
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  }[]
}

export default function Home( { continents }: HomeProps ) {



  return (
    <Box bg='white.50' w='100%' pb='40px'>
      <Header />
      <Banner />
      <Cards />
      <Stack align='center' spacing='0px'>
        <Box bg='gray.500' w='100px' h='2px' borderRadius='10' my='70px'/>  
        <Text fontSize='5xl'>Vamos nessa?</Text>
        <Text fontSize='5xl'>Então escolha seu continente</Text>
      </Stack>
      <Slide continents={continents}/>
    </Box>
  )
}


export async function getStaticProps({ previewData }){
  const client = createClient({ previewData })
  
  const response = await client.getAllByType('continent')
  // console.log(JSON.stringify(response,null,2))
  // console.log(response)

  const continents = response.map(continent => {
    return{
      slug: continent.uid,
      title: continent.data.title[0].text,
      subtitle: continent.data.subtitle[0].text,
      image: continent.data.citie[0].banner.url
    }

  })

  return {
    props: { continents },
  }
}