import { Flex, Img } from "@chakra-ui/react";

export default function Header() {
  return(
    <a href="http://localhost:3000/">
      <Flex bg='white.50' justify='center' py={{base: '3', lg:'10'}}>
        <Img src='../images/Logo.png' w={['80px','185px']} maxH='47'/>
      </Flex> 
    </a>
  )
}