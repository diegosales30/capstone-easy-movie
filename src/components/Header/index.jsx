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
  const token = JSON.stringify(localStorage.getItem("@token"));
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <>
      <Box 
        position={'fixed'}
        zIndex='999'
        h='6.5vh'
        top={0}
        left={0}
        right={0}
        w={"100%"} 
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        >
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

              {token === "null" ? (
                <Button
                  variant="solid"
                  bg={'#E50914'}
                  color="white"
                  onClick={() => { navigate("/login"); }}
                >
                  Logar
                </Button>
              ) : (
                <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Seus Ingressos</MenuItem>
                  <MenuItem onClick={() => { 
                    localStorage.clear()
                    navigate('/')
                  }}>Sair</MenuItem>
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
