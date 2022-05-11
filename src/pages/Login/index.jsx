import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  useColorMode,
  Input,
  Link,
  Stack,
  Box,
  InputGroup,
  InputLeftElement,
  IconButton,
  Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, LockIcon, UnlockIcon, EmailIcon } from '@chakra-ui/icons';
import { DataImg } from '../../components/Carousel/dataImg';
import Carrosel from '../../components/Carousel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

export default function Login() {

  const formSchema = yup.object().shape({
    email: yup.string().email("E-mail Inválido!").required("E-mail é obrigatório!"),
    password: yup.string().min(8, "Mínimo de 6 caracteres").required("Senha é obrigatório!")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const navigate = useNavigate()

  const {colorMode, toggleColorMode } = useColorMode()

  const [show, setShow] = useState(false)

  const showPassword = () => setShow(!show)

  const toRegister = () => navigate('/register')

  return (
    <Stack height={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} w={"50%"} align={'center'} justify={'space-around'} direction={{ base: 'column', md: 'column' }}>
        <Flex w={"100%"} h={'5vh'} justify={'flex-start'} align={'center'} >
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Flex>
        <Stack spacing={4} w={'full'} maxW={'md'} h={'95vh'} justify={'center'}>
          <Flex mb='7rem' justify={'center'}>
            <Heading fontSize={'6xl'} justify={'center'} color={'#E50914'}>Easy.Movie</Heading>
          </Flex>
          <Heading color={'#E50914'} fontSize={'3xl'}>Login</Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input variant='flushed' type="email" />
              <InputLeftElement>
                <EmailIcon color='gray.400'/>
              </InputLeftElement>
            </InputGroup>
          </FormControl>
          <FormControl id="password">
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
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'#E50914'}>Esqueceu a Senha?</Link>
            </Stack>
            <Button type='submit' color='white' bg={'#E50914'} variant={'solid'}>
              Login
            </Button>
            <Flex align={'center'} justify={'center'} >
              Ainda não possui conta? Cadastre-se clicando <Text ml={1} style={{cursor: 'pointer', color: 'red'}} onClick={toRegister}>aqui</Text>
            </Flex>
          </Stack>
        </Stack>
      </Flex>
      {/* consertar a altura final da tela de login*/}
      <Box w="50%" height={"100vh"} color="white">
        <Carrosel slides={DataImg} />
      </Box>
    </Stack>
  );
}