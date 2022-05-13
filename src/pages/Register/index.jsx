import {
  Button,
  Flex,
  Heading,
  useColorMode,
  VStack,
  HStack,
  Text,
  Center,
} from '@chakra-ui/react';
import { FaCopyright } from 'react-icons/fa'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../../components/FormRegister';

export default function Register() {

  const navigate = useNavigate()

  const {colorMode, toggleColorMode } = useColorMode()

  const toLogin = () => {
    navigate("/login")
  }

  return (
    <VStack>
      <HStack
        pl={5}
        pr={5}
        borderBottom='1px'
        borderColor='gray.200'
        w='100%' h='8vh'
        align={'center'}
        justify={'space-between'}>
        <Heading fontSize={'6xl'} justify={'center'} color={'#E50914'}>Easy.Movie</Heading>
        <HStack>
          <Button onClick={toggleColorMode} >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack>
      </HStack>
      <Center
        h='85.4vh'
        minW='25%'
      >
        <VStack spacing={5}>
          <Heading color={'#E50914'}>Criar Conta</Heading>
          <RegisterForm />
          <HStack align={'center'} >
            <Text>Já possui cadastro? Clique aqui: </Text>
            <Text ml={1} style={{cursor: 'pointer', color: 'red', fontWeight: '700'}} onClick={toLogin}>Login</Text>
          </HStack>
        </VStack>
      </Center>
      <Flex
        h='5vh'
        w='100%'
        justify='center'
        align={'center'}>
        <FaCopyright/>
        <Text ml='0.5rem'>2022 IFood Kenzie - Team 4. All rights reserved.</Text>
      </Flex>
    </VStack>
  );
}