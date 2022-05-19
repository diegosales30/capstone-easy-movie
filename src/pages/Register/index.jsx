import {
  Button,
  Flex,
  Heading,
  useColorMode,
  VStack,
  HStack,
  Text,
  Center,
  Image,
} from "@chakra-ui/react";
import { FaCopyright } from "react-icons/fa";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/FormRegister";
import logo from "../../assets/logo0.png";

const Register = () => {
  const navigate = useNavigate();

  // const { colorMode, toggleColorMode } = useColorMode();

  const toLogin = () => {
    navigate("/login");
  };

  return (
    <VStack bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.7)) ,url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cea6768a-2841-42e6-84d2-b32883c7d6da/decsx4s-0fd3a9fc-d074-44a6-969a-f1949f9fa163.png/v1/fill/w_1600,h_900,strp/movie_posters_wallpaper_8k_by_dskstudiosl_decsx4s-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvY2VhNjc2OGEtMjg0MS00MmU2LTg0ZDItYjMyODgzYzdkNmRhXC9kZWNzeDRzLTBmZDNhOWZjLWQwNzQtNDRhNi05NjlhLWYxOTQ5ZjlmYTE2My5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nqDRS6Z2VZMGfrD3Slp0p5B6OlLELAWd_EvadL60qk8')">
      <HStack
        pl={5}
        pr={5}
        borderColor="gray.200"
        bg={"rgba(0,0,0,.75)"}
        w="100%"
        h="8vh"
        align={"center"}
        justify={"space-between"}
      >
        <Heading fontSize={"20px"} justify={"center"} color={"#E50914"}>
          <Image src={logo} w={"300px"} />
        </Heading>
        {/* <HStack>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </HStack> */}
      </HStack>
      <Center h="85.4vh" minW="25%">
        <VStack spacing={5} p={10} bg={"rgba(0,0,0,.75)"} w="100%" h="80%">
          <Heading color={"#E50914"}>Registrar</Heading>
          <RegisterForm />
          <HStack align={"center"}>
            <Text color={"white"}>Já possui cadastro? Clique aqui: </Text>
            <Text
              ml={1}
              style={{ cursor: "pointer", color: "red", fontWeight: "700" }}
              onClick={toLogin}
            >
              Login
            </Text>
          </HStack>
        </VStack>
      </Center>
      <Flex
        h="5vh"
        w="100%"
        justify="center"
        align={"center"}
        bg={"rgba(0,0,0,.75)"}
      >
        <FaCopyright />
        <Text ml="0.5rem">
          2022 IFood Kenzie - Team 4. All rights reserved.
        </Text>
      </Flex>
    </VStack>
  );
};
export default Register;
