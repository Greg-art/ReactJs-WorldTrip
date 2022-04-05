import { Box, Stack, Text } from '@chakra-ui/react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Cards from '../components/Cards/Index'
import Slide from '../components/Slide/Index'
import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/continents", () => ({
      continents: [
        {id: 1, name:"Europa", países:50, image:"London.jpg"},
        {id: 2, name:"América", países:36, image:"san-diego.jpg"},
        {id: 3, name:"áfrica", países:54, image:"Marimba.jpg"},
        {id: 4, name:"Oceania", países:14, image:"Marimba.jpg"},
        {id: 5, name:"Ásia", países:49, image:"Tokio.jpg"},
      ]
    }))
  }
})

export default function Home() {
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
      <Slide/>
    </Box>
  )
}
