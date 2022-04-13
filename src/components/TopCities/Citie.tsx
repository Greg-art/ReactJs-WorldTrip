import { Stack, Image, Text, Box } from "@chakra-ui/react";

interface CitieProps{
  name: string,
  country: string,
  banner: string,
  flag: string,
}

export default function Citie({ name, country, banner, flag}: CitieProps){


  return(
    <Stack
      w='256px'
      h='279px'
      bg='white'
      spacing='0px'
      borderRadius='4px'  
      mt='10'
    >
      <Image
        fit='cover'
        src={banner}
        width='100%'
        h='173px' 
        borderRadius='4px 4px 0px 0px'   
        
      />
      <Stack
        h='100%'
        justify='space-between'
        align='center'
        direction='row'
        borderColor='yellow.500'
        borderWidth='0px 1px 1px '
        borderRadius='0px 0px 4px 4px'  
        p='6'        
      >
        <Stack justify='space-between' spacing='4'>
          <Text fontWeight='bold' fontSize='lg'>{name}</Text>
          <Text opacity='0.8'>{country}</Text>
        </Stack>        
        <Image
          w='12'
          h='12'
          src={flag} 
          borderRadius='360px'
        />
      </Stack>
    </Stack>    
  );

  
}