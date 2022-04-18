import { Flex } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CitieSlide from "../Slide/CitieSlide"
import { Pagination, Navigation } from "swiper";



interface SlideProps{
  continents:{
    slug: string;
    title: string;
    subtitle: string;
    image: string;
  }[]
}

export default function Slide( { continents }: SlideProps ){


  return(
    <Flex justify='center' w='100%' my='40px'>
      <Flex maxW='1240px' w='100%' h='450px'>
        <Swiper navigation={true} pagination={true} modules={[Pagination, Navigation]}>

          {continents.map(continent => (
            <SwiperSlide  key={continent.slug}>
              <CitieSlide
                slug={continent.slug}
                image={continent.image}
                title={continent.title}
                subtitle={continent.subtitle} />
            </SwiperSlide >
          ))}

        </Swiper>
      </Flex>
    </Flex> 
  )
}