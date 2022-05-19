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
} from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { signInThunk } from "../../store/modules/user/thunk";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail Inválido!")
      .required("E-mail é obrigatório!"),
    //adicionar Regex para senha forte
    password: yup
      .string()

      .required("Senha é obrigatório!"),
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

  const invalidEmail = () => (errors.email ? true : false);
  const invalidPassword = () => (errors.password ? true : false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    return dispatch(signInThunk(data, navigate));
  };

  return (
    <VStack spacing={5} as={"form"}>
      <FormControl isInvalid={invalidEmail}>
        <FormLabel color={"white"}>Email</FormLabel>
        <Input
          color={"white"}
          variant="outline"
          size={"lg"}
          type="email"
          name="email"
          {...register("email")}
        />
        <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={invalidPassword}>
        <FormLabel color={"white"}>Senha</FormLabel>
        <InputGroup>
          <Input
            color={"white"}
            variant="outline"
            size={"lg"}
            type={show ? "text" : "password"}
            name="password"
            {...register("password")}
          />
          <InputRightElement>
            <IconButton
              color="white"
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
      <Button
        w="300px"
        size={"lg"}
        type="submit"
        onClick={handleSubmit(onSubmit)}
        bg="#E50914"
        color="white"
        variant="unstyled"
      >
        Login
      </Button>
    </VStack>
  );
};

export default LoginForm;
