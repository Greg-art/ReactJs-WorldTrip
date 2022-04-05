import { Box, Stack, Text } from '@chakra-ui/react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Cards from '../components/Cards/Index'
import Slide from '../components/Slide'

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
