import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  fonts: {
    heading: 'Helvetica Neue, sans-serif'
  },
  components: {
    Link: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  },
})

export default Theme;