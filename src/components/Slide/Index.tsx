import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CitieSlide from "../Slide/CitieSlide"
import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from 'react';


export default function Slide(){
  const [continents, setContinents] = useState([])

  useEffect(() =>{
    fetch("/api/continents")
      .then((res) => res.json())
      .then((json) => setContinents(json.continents) )
      .catch(err => console.log(err))
  },[])

  return(
    <Flex justify='center' w='100vw' my='40px'>
      <Flex maxW='1240px' h='450px'>
        <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]}>
          {continents.map(({id, name, image}) => (      
            <a href={`http://localhost:3000/cities/${name}`}> 
              <SwiperSlide key={id}>
                <CitieSlide image={`./images/cities/${image}`} title={name} subtitle='A cidade mais antiga.'/>
              </SwiperSlide >
            </a>   
          ))}
        </Swiper>
      </Flex>
    </Flex> 
  )
}