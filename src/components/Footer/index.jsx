import {
  VStack,
  Center,
  Flex,
  Heading,
  Button,
  Text,
  IconButton,
  Stack,
  HStack,
  useColorModeValue
} from '@chakra-ui/react'
import { FaCopyright, FaTwitter, FaFacebook} from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'

const Footer = () => {
  return(
    <VStack
      w={'100%'}
      spacing={0}
    >
      <Center
        bg={useColorModeValue("gray.100", "gray.900")}
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        w={'100%'}
        h={'9vh'}
      >
        <VStack>
          <Heading fontSize={'2xl'} color={'#E50914'}>Easy.Movie</Heading>
          <HStack spacing={10}>
            <Button variant={'link'}>Home</Button>
            <Button variant={'link'}>About</Button>
            <Button variant={'link'}>Contact</Button>
          </HStack>
        </VStack>
      </Center>
      <HStack
        w={'100%'}
        h={'6vh'}
        align={'center'}
        justify='space-between'
        pl={4}
        pr={4}
        borderTop={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        bg={useColorModeValue("gray.200", "gray.900")}
      >
        <Flex
          align={'center'}
        >
          <FaCopyright/>
          <Text ml='0.5rem'>2022 IFood Kenzie - Team 4. All rights reserved.</Text>
        </Flex>
        <Stack direction={'row'} spacing={4}>
          <IconButton borderRadius={'20px'} colorScheme={'twitter'} icon={<FaTwitter/>}/>
          <IconButton borderRadius={'20px'} colorScheme={'facebook'} icon={<FaFacebook/>}/>
          <IconButton borderRadius={'20px'} icon={<FcGoogle/>}/>
        </Stack>
      </HStack>
    </VStack>
  )
}

export default Footer;