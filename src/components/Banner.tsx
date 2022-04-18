import { Text, Flex, Heading, Image, Stack, useBreakpointValue } from "@chakra-ui/react";

export default function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Flex
      w="100%"  
      h={['163px',"400px"]}
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
        px={['5','10']}
      >
        <Stack w={{base: '100%', lg:'50%'}} spacing={['4','8']}>
          <Heading color='white.50' fontSize={['xl','3xl']} fontWeight='medium'>
            5 Continentes, infinitas possibilidades
          </Heading>
          <Text
            color='white.500'
            fontSize={['md','xl']}
            fontWeight='light'
            >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Stack>
        { isWideVersion &&
          <Image
            maxW='417px'
            w={['200px','417px']}
            mt='200px'
            src='./images/airplane.png'
          />
        }
      </Flex>
    </Flex>
  )
}