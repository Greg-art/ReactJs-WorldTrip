import { Text, Flex, Image, Stack, Box, Grid } from "@chakra-ui/react"
import Card from "./card"


export default function Cards(){
 return(

    <Flex w='100%' align='center' justify='center'>
      <Grid
        pt={['35px','70px']}
        maxW='1150px'
        w='100%'
        mx='16px'
        templateColumns={{base:
        'repeat(3,1fr)',lg:'repeat(5,1fr)'}}
        rowGap='30px'
        columnGap='0px'
      >
        <Card text='vida noturna' image='./images/icones/cocktail.png'/>
        <Card text='praia' image='./images/icones/surf.png'/>
        <Card text='moderno' image='./images/icones/building.png'/>
        <Card text='clássico' image='./images/icones/museum.png'/>
        <Card text='e mais...' image='./images/icones/earth.png'/>
      </Grid>
    </Flex>

 )
}