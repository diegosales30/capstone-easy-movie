import {
  Button,
  Flex,
  Heading,
  Text,
  Center,
  VStack,
  HStack,
  Image,
} from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/FormLogin";
import logo from "../../assets/logo0.png";

const Login = () => {
  const navigate = useNavigate();

  const toRegister = (path) => {
    navigate(path);
  };
  return (
    <VStack
      h="100vh"
      w="100vw"
      bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) ,url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cea6768a-2841-42e6-84d2-b32883c7d6da/decsx4s-0fd3a9fc-d074-44a6-969a-f1949f9fa163.png/v1/fill/w_1600,h_900,strp/movie_posters_wallpaper_8k_by_dskstudiosl_decsx4s-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvY2VhNjc2OGEtMjg0MS00MmU2LTg0ZDItYjMyODgzYzdkNmRhXC9kZWNzeDRzLTBmZDNhOWZjLWQwNzQtNDRhNi05NjlhLWYxOTQ5ZjlmYTE2My5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nqDRS6Z2VZMGfrD3Slp0p5B6OlLELAWd_EvadL60qk8')"
    >
      <HStack
        pl={5}
        pr={5}
        borderColor="gray.200"
        bg={"rgba(0,0,0,.75)"}
        w="100%"
        minH="80px"
        align={"center"}
        justify={"space-between"}
        sx={{
          "@media(max-width: 768px)": {
            justifyContent: "center",
          },
        }}
      >
        <Heading justify={"center"} color={"#E50914"}>
          <Image src={logo} w={"300px"} />
        </Heading>
      </HStack>
      <Center h="90vh" maxH={"862px"} maxW="500px" minW="320px" w="80vw">
        <VStack
          spacing={5}
          p={0}
          bg={"rgba(0,0,0,.75)"}
          w="100%"
          h="65vh"
          padding="30px 0px"
          maxH={"560px"}
        >
          <Heading
            fontSize={"4xl"}
            justify={"center"}
            color={"#E50914"}
            lineHeight={1.2}
          >
            Entrar
          </Heading>

          <LoginForm />
          <HStack display={"flex"} flexDirection={"column"} pt={5}>
            <Text color={"#8c8c8c"}>Novo por aqui?</Text>
            <Button
              color={"white"}
              variant="link"
              onClick={() => toRegister("/register")}
            >
              Cadastre-se agora.
            </Button>
            <Text color={"#8c8c8c"}>ou</Text>
            <Button
              color={"white"}
              variant="link"
              onClick={() => toRegister("/")}
            >
              Continuar sem registro
            </Button>
          </HStack>
        </VStack>
      </Center>
      <Flex
        h="5vh"
        w="100%"
        bg={"rgba(0,0,0,.75)"}
        justify="center"
        align={"center"}
      >
        <FaCopyright color="white" />
        <Text ml="0.5rem" color="white">
          2022 IFood Kenzie - Team 4. All rights reserved.
        </Text>
      </Flex>
    </VStack>
  );
};
export default Login;
