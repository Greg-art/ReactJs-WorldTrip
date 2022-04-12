import { Flex, Img } from "@chakra-ui/react";

export default function Header() {
  return(
    <Flex bg='white.50' justify='center' py='10'>
      <Img src='../images/Logo.png' />
    </Flex>
  )
}