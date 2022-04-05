import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Poppins, sans-serif',
  },
  colors:{
    gray:{
      '800': '#47585B',
    },
    white:{
      '50': '#F5F8FA',
      '500': '#DADADA',
    },
    yellow:{
      '500' : '#FFBA08',
    },
  },
  styles:{
    global:{
      body:{
        bg:'gray.800',
        color:'gray.800',
        FontFace:'Poppins' 
      }
    }
  }
})

export default theme
