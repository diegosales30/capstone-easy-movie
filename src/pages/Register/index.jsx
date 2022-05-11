import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  useColorMode,
  Input,
  Text,
  Stack,
  Box,
  IconButton,
  InputLeftElement,
  InputGroup,
  Icon
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa'
import { MoonIcon, SunIcon, LockIcon, UnlockIcon, EmailIcon } from '@chakra-ui/icons';
import { DataImg } from '../../components/Carousel/dataImg';
import Carrosel from '../../components/Carousel';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {

  const navigate = useNavigate()

  const {colorMode, toggleColorMode } = useColorMode()

  const [show, setShow] = useState(false)
  const showPassword = () => setShow(!show)

  const toLogin = () => {
    navigate("/login")
  }

  return (
    <Stack maxHeight={'100vh'} direction={{ base: 'row', md: 'row' }}>
      {/* consertar a altura final da tela de login*/}
      <Box w="50%" height={"100vh"} color="white">
        <Carrosel slides={DataImg}/>
      </Box>
      <Flex w={"50%"} align={'center'} justify={'space-around'} direction={{ base: 'column', md: 'column' }}>
        <Flex w='100%' justify={'flex-end'}>
          <Button onClick={toggleColorMode} >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
        <Stack spacing={4} w={'full'} maxW={'md'} h={'95vh'} justify={'center'}>
          <Flex justify={'center'}>
            <Heading mb='5rem' fontSize={'6xl'} justify={'center'} color={'#E50914'}>Easy.Movie</Heading>
          </Flex>
          <FormControl isRequired id='username'>
            <FormLabel>Usuário</FormLabel>
            <InputGroup>
              <Input variant='flushed' type="text" />
              <InputLeftElement>
                <Icon as={FaUser} color='gray.400'/>
              </InputLeftElement>
            </InputGroup>
          </FormControl>
          <FormControl isRequired id="email">
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input variant='flushed' type="email" />
              <InputLeftElement>
                <EmailIcon color='gray.400'/>
              </InputLeftElement>
            </InputGroup>
          </FormControl>
          <FormControl isRequired id="password">
            <FormLabel>Senha</FormLabel>
            <InputGroup>
              <Input variant='flushed' type={show ? 'text' : "password"} />
              <InputLeftElement pr={'0.2rem'}>
                <IconButton color='gray.400' variant='ghost' size='sm' onClick={showPassword}>
                  {show ? <UnlockIcon /> : <LockIcon />}
                </IconButton>
              </InputLeftElement>
            </InputGroup>
          </FormControl>
          <FormControl isRequired id="confirmPassaword">
            <FormLabel>Confirmar Senha</FormLabel>
            <InputGroup>
              <Input variant='flushed' type={show ? 'text' : "password"} />
              <InputLeftElement pr={'0.2rem'}>
                <IconButton color='gray.400' variant='ghost' size='sm' onClick={showPassword}>
                  {show ? <UnlockIcon /> : <LockIcon />}
                </IconButton>
              </InputLeftElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Aceitar os termos de uso.</Checkbox>
            </Stack>
            <Button bg={'#E50914'} color='white' variant={'solid'}>
              Cadastre-se
            </Button>
            <Flex align={'center'} justify={'center'} >
              Já possui cadastro? Clique aqui: <Text ml={1} style={{cursor: 'pointer', color: 'red', fontWeight: '700'}} onClick={toLogin}>Login</Text>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}