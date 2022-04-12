import { Flex } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CitieSlide from "../Slide/CitieSlide"
import { Pagination, Navigation } from "swiper";
import { useState } from 'react';


interface SlideProps{
  continents:{
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  }[]
}

export default function Slide( { continents }: SlideProps ){

  console.log(continents)

  return(
    <Flex justify='center' w='100vw' my='40px'>
      <Flex maxW='1240px' h='450px'>
        <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]}>

          {continents.map(continent => (
              // <a key={continent.slug} href={`http://localhost:3000/continent/${continent.slug}`}> 
                <SwiperSlide key={continent.slug}>
                  <CitieSlide
                    slug={continent.slug}
                    image={continent.image}
                    title={continent.title}
                    subtitle={continent.subtitle} />
                </SwiperSlide >
              // </a>   
          ))}

        </Swiper>
      </Flex>
    </Flex> 
  )
}