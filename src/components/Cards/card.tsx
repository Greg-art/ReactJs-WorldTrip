import { Stack, Text, Image } from "@chakra-ui/react";

interface CardProps{
  image: string
  text: string 
}

export default function Card({ image, text }: CardProps){
  return(
    <Stack spacing='8' justify='center' align='center'>
      <Image src={image} w='85px' h='85px'/>
      <Text fontSize='lg' fontWeight='bold' >{text}</Text>
    </Stack>    
  )
}