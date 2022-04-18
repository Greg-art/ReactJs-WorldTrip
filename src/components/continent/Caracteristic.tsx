import { Text, Flex, Stack, Tooltip, Icon, Box } from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

interface BannerContinentProps {
  number: number;
  name: string;
  tooltip?: string;
}

export default function BannerContinent({ number, name, tooltip='' }: BannerContinentProps) {

  return(
    <Stack justify='center' align='center'>
      <Text
        color='yellow.500'
        fontWeight='bold'
        fontSize={[ '4xl','5xl']}
      >{number}</Text>
      <Stack direction='row' spacing='1' justify='center' align='center'>
        <Text fontWeight='bold' fontSize={[ 'sm','md']}>
          {name} 
        </Text> 
        {tooltip !='' && 
          <Tooltip label={tooltip}>
            <Flex> <Icon as={FiInfo} /> </Flex>
          </Tooltip>
        }
      </Stack>
    </Stack>  
  );
}