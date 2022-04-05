import { AspectRatio, Box, Text, Flex, Heading, Image, Stack } from "@chakra-ui/react";

export default function Banner() {
  return(
    <Flex
      w="100%"  
      h="400px"
      bgImage="url('./images/banner-image.jpg')"
      bgPosition='100% 20%'
      bgRepeat="no-repeat"
      bgSize="cover"
      justify='center'
      mb='70px'
    >
     <Flex
        w="1240px"
        align='center'
        justify='space-between'
        px='10'>
        <Stack w='50%' spacing='8'>
          <Heading color='white.50'>
            5 Continentes, infinitas possibilidades
          </Heading>
          <Text
            color='white.500'
            fontSize='xl'
            fontWeight='light'
            >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Stack>
        <Image
          w='417px'
          mt='200px'
          src='./images/airplane.png'
        />
      </Flex>
    </Flex>
  )
}