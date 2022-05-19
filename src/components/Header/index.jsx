import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { searchMoviesThunk } from "../../store/modules/searchMovie/thunk";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo0.png";

export default function Header() {
  const token = JSON.stringify(localStorage.getItem("@token"));

  const { colorMode, toggleColorMode } = useColorMode();

  const { username } = useSelector((state) => state.signIn.user || "");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    dispatch(searchMoviesThunk(inputValue));
  };

  return (
    <>
      <Box w={"100%"} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading fontSize={"3xl"} color={"#E50914"} cursor={"pointer"}>
              <Image src={logo} w={300} />
            </Heading>
          </Box>
          <VStack>
            <InputGroup>
              <Input onChange={(e) => setInputValue(e.target.value)} />
              <InputLeftElement>
                <SearchIcon cursor="pointer" onClick={handleSearch} />
              </InputLeftElement>
            </InputGroup>
          </VStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {token === "null" ? (
                <Button
                  variant="solid"
                  bg={"#E50914"}
                  color="white"
                  colorScheme={colorMode === "light" ? "red" : "light"}
                  onClick={() => {
                    localStorage.clear();
                    navigate("/login");
                  }}
                >
                  Logar
                </Button>
              ) : (
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={
                          "https://avatars.dicebear.com/api/male/username.svg"
                        }
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>{username}</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Seus Ingressos</MenuItem>
                    <MenuItem
                      onClick={() => {
                        localStorage.clear();

                        setTimeout(() => {
                          window.location.reload("/");
                          //refatorar para não recarregar a pagina
                        }, 200);
                        //navigate("/");
                      }}
                    >
                      Sair
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
