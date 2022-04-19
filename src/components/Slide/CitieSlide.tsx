import { Flex, Image, Link, Stack, Text } from '@chakra-ui/react';
import { SwiperSlide } from 'swiper/react'
import { ImageProps } from '@chakra-ui/react';

interface CitieSlideProps extends ImageProps {
  slug: string
  title?: string,
  subtitle?: string,
  image: string,
}

export default function CitieSlide( { slug, image, title, subtitle, ...rest }: CitieSlideProps ){
  return(
    <Link href={`http://localhost:3000/continent/${slug}`}>
      <Flex align='center' justify='center'>
        <Image
          w='100vw'
          h='450px'
          fit='cover'
          src={image} 
          filter='auto'
          brightness='40%'
          alt={title}
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
            fontSize={['2xl','4xl']}
            fontWeight='bold'
          >{title}</Text>
          <Text
            color='white.50'
            fontSize={['md','xl']}
          >{subtitle}</Text>
        </Stack>
      </Flex>
    </Link>
  );
}