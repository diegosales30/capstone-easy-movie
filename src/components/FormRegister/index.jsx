import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputRightElement,
  IconButton,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    username: yup.string().required("Nome é obrigatório!"),
    email: yup
      .string()
      .email("E-mail Inválido!")
      .required("E-mail é obrigatório!"),
    password: yup
      .string()
      .min(8, "Mínimo de 6 caracteres")
      .required("Senha é obrigatório!"),
    confirmPassword: yup
      .string()
      .required("Senha é obrigatório!")
      .oneOf([yup.ref("password")], "Digite a senha corretamente!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [show, setShow] = useState(false);

  const showPassword = () => setShow(!show);

  const invalidUsername = () => (errors.username ? true : false);
  const invalidEmail = () => (errors.email ? true : false);
  const invalidPassword = () => (errors.password ? true : false);
  const invalidConfirmPassword = () => (errors.confirmPassword ? true : false);

  const onSubmit = (data) => {
    axios
      .post("https://easy-movie.herokuapp.com/register", data)
      .then((res) => {
        toast.success("created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((err) => {
        toast.error("email already exists");
      });
  };

  return (
    <VStack>
      <FormControl isInvalid={invalidUsername} isRequired>
        <FormLabel>Usuário</FormLabel>
        <Input
          variant="outline"
          size={"lg"}
          type="text"
          name="username"
          {...register("username")}
        />
        <FormErrorMessage>{errors?.username?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={invalidEmail} isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          variant="outline"
          size={"lg"}
          type="email"
          name="email"
          {...register("email")}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={invalidPassword} isRequired>
        <FormLabel>Senha</FormLabel>
        <InputGroup>
          <Input
            variant="outline"
            size={"lg"}
            type={show ? "text" : "password"}
            name="password"
            {...register("password")}
          />
          <InputRightElement>
            <IconButton
              variant="unstyled"
              mt="0.5rem"
              size="md"
              onClick={showPassword}
            >
              {show ? <UnlockIcon /> : <LockIcon />}
            </IconButton>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={invalidConfirmPassword} isRequired>
        <FormLabel>Confirmar Senha</FormLabel>
        <InputGroup>
          <Input
            variant="outline"
            size={"lg"}
            type={show ? "text" : "password"}
            name="confirmPassword"
            {...register("confirmPassword")}
          />
          <InputRightElement>
            <IconButton
              variant="unstyled"
              mt="0.5rem"
              size="md"
              onClick={showPassword}
            >
              {show ? <UnlockIcon /> : <LockIcon />}
            </IconButton>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors?.confirmPassword?.message}</FormErrorMessage>
      </FormControl>
      <Button
        w="300px"
        size={"lg"}
        type="submit"
        onClick={handleSubmit(onSubmit)}
        bg="#E50914"
        color="white"
        variant="unstyled"
      >
        Cadastrar
      </Button>
    </VStack>
  );
};

export default RegisterForm;
