import { Stack, Text, Image, useBreakpointValue, Box } from "@chakra-ui/react";

interface CardProps{
  image: string
  text: string 
}

export default function Card({ image, text }: CardProps){
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  if(isWideVersion){
    return(
      <Stack spacing='8' justify='center' align='center'>
        <Image src={image} w={['40px','85px']} h={['40px','85px']} alt={text}/>  &&
        <Text fontSize={['md','lg']} fontWeight='bold' >{text}</Text>
      </Stack>    
    )
  }

  return(
    <Stack direction='row' spacing='2' justify='center' align='center'>
      <Box w='10px' h='10px' bg='yellow.500' borderRadius='360'></Box>
      <Text fontSize={['md','lg']} fontWeight='bold' >{text}</Text>
    </Stack>      
    
  )

}