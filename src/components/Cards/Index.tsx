import { Text, Flex, Image, Stack, Box } from "@chakra-ui/react"
import Card from "./card"


export default function Cards(){
 return(
  <Box align='center' w='100%'>
    <Stack  
      maxW='1150px'
      direction='row'
      justify='space-between'
      align='center'
      px='8'
      py='70px'
    >
      <Card text='vida noturna' image='./images/icones/cocktail.png'/>
      <Card text='praia' image='./images/icones/surf.png'/>
      <Card text='moderno' image='./images/icones/building.png'/>
      <Card text='clássico' image='./images/icones/museum.png'/>
      <Card text='e mais...' image='./images/icones/earth.png'/>
    </Stack>   
  </Box>
 )
}