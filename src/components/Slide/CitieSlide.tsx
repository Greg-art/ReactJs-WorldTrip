import { Flex, Image, Stack, Text } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react'
import { ImageProps } from '@chakra-ui/react';

interface CitieSlideProps extends ImageProps {
  image: string,
  title?: string,
  subtitle?: string,
}

export default function CitieSlide( {image, title, subtitle, ...rest }: CitieSlideProps ){
  return(
      <Flex align='center' justify='center'>
        <Image
          w='100vw'
          h='450px'
          fit='cover'
          src={image} 
          filter='auto'
          brightness='40%'
          {...rest}
        />
        <Stack
          spacing='10px'
          position='absolute'
          align='center'
          justify='center'
        >
          <Text
            color='white.50'
            fontSize='4xl'
            fontWeight='bold'
          >{title}</Text>
          <Text
            color='white.50'
            fontSize='xl'
          >{subtitle}</Text>
        </Stack>
      </Flex>
  );
}