import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import CitieSlide from "../Slide/CitieSlide"


export default function Slide(){
  return(
    <Flex justify='center' w='100vw' my='40px'>
      <Flex maxW='1240px' h='450px'>
        <Swiper navigation={true} modules={[Pagination]}>
          <SwiperSlide >
            <CitieSlide image='./images/cities/London.jpg' title='Europa' subtitle='A cidade mais antiga.'/>
          </SwiperSlide >
          <SwiperSlide >
            <CitieSlide image='./images/cities/Marimba.jpg' title='Africa' subtitle='A cidade mais natureba.'/>
          </SwiperSlide >
          <SwiperSlide >
            <CitieSlide image='./images/cities/San-Diego.jpg' title='América' subtitle='A cidade mais Diego.'/>
          </SwiperSlide >
          <SwiperSlide >
            <CitieSlide image='./images/cities/Tokio.jpg' title='Ásia' subtitle='A cidade mais drift.'/>
          </SwiperSlide >
        </Swiper>
      </Flex>
    </Flex>
  )
}