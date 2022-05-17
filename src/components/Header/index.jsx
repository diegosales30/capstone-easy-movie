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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const token = JSON.parse(localStorage.getItem("token"));
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <>
      <Box w={"100%"} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Heading fontSize={"3xl"} color={"#E50914"}>
              Easy.Movie
            </Heading>
          </Box>
          <VStack>
            <InputGroup>
              <Input />
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
            </InputGroup>
          </VStack>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              {token === null ? (
                <Button
                  variant="solid"
                  bg={'#E50914'}
                  color="white"
                  onClick={() => { navigate("/login"); }}
                >
                  Logar
                </Button>
              ) : (
                <Avatar
                  size={"sm"}
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
              )}

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                ></MenuButton>
                <MenuList alignItems={"center"}>
                  <br />

                  {token === null ? (
                    <>
                      <Center>
                        <Avatar
                          size={"2xl"}
                          src="https://img2.gratispng.com/20180402/ojw/kisspng-united-states-avatar-organization-information-user-avatar-5ac20804a62b58.8673620215226654766806.jpg"
                        />
                      </Center>
                      <br />
                      <Center>
                        <p>Usuario não Logado</p>
                      </Center>
                    </>
                  ) : (
                    <>
                      <Center>
                        <Avatar size={"2xl"} src="https://bit.ly/dan-abramov" />
                      </Center>
                      <br />
                      <Center>
                        <p>Dan Abrahmov</p>
                      </Center>
                    </>
                  )}
                  <br />
                  <MenuDivider />
                  <MenuItem>Suas Compras</MenuItem>
                  <MenuItem>Gerenciar Conta</MenuItem>
                  <MenuItem>Deslogar</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
