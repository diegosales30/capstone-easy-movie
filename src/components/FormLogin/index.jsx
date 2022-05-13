import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputRightElement,
  IconButton,
  VStack,
  InputGroup,
} from '@chakra-ui/react';
import { LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'

const LoginForm = () => {
  
  const formSchema = yup.object().shape({
    email: yup.string().email("E-mail Inválido!").required("E-mail é obrigatório!"),
    //adicionar Regex para senha forte
    password: yup.string().min(8, "Mínimo de 6 caracteres").required("Senha é obrigatório!")
  })
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const [show, setShow] = useState(false)

  const showPassword = () => setShow(!show)

  const invalidEmail = () => errors.email ? true : false
  const invalidPassword = () => errors.password ? true : false

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <VStack spacing={5} as={'form'}>
      <FormControl 
        isInvalid={invalidEmail}
      >
        <FormLabel color={'#8c8c8c'}>Email</FormLabel>
        <Input 
          color={'white'}
          variant='outline'
          bg='#333'
          size={'lg'}
          type='email' 
          name='email' 
          {...register('email')}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={invalidPassword}
      >
        <FormLabel color={'#8c8c8c'}>Senha</FormLabel>
        <InputGroup>
          <Input 
            color={'white'}
            variant='outline'
            bg='#333'
            size={'lg'}
            type={show ? 'text' : 'password'}
            name='password' 
            {...register('password')}
            
          />
          <InputRightElement>
            <IconButton 
              color='#8c8c8c' 
              variant='unstyled' 
              mt='0.5rem' 
              size='md' 
              onClick={showPassword}>
              {show ? <UnlockIcon /> : <LockIcon />}
            </IconButton>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <Button
        w='300px'
        size={'lg'}
        type='submit'
        onClick={handleSubmit(onSubmit)}
        bg='#E50914'
        color='white'
        variant='unstyled'
      >
        Login
      </Button>
    </VStack>
  )
}

export default LoginForm;