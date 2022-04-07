import { Flex } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CitieSlide from "../Slide/CitieSlide"
import { Pagination, Navigation } from "swiper";
import { useState } from 'react';


export default function Slide(){
  const [continents, setContinents] = useState([])


  return(
    <Flex justify='center' w='100vw' my='40px'>
      <Flex maxW='1240px' h='450px'>
        <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]}>
          <a key={1} href={`http://localhost:3000/continent/1`}> 
            <SwiperSlide >
              <CitieSlide image='/images/cities/London.jpg' title='Europa' subtitle='A cidade mais antiga.'/>
            </SwiperSlide >
          </a>   
          <a key={2} href={`http://localhost:3000/continent/1`}> 
            <SwiperSlide >
              <CitieSlide image={`./images/cities/London.jpg`} title='Europa' subtitle='A cidade mais antiga.'/>
            </SwiperSlide >
          </a>             
        </Swiper>
      </Flex>
    </Flex> 
  )
}