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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons';

export default function Header() {

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box w={'100%'} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Heading fontSize={'3xl'} color={'#E50914'}>Easy.Movie</Heading>
          </Box>
          <VStack>
            <InputGroup>
              <Input />
              <InputLeftElement>
                <SearchIcon/>
              </InputLeftElement>
            </InputGroup>
          </VStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    name='Dan Abrahmov'
                    src='https://bit.ly/dan-abramov'
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src='https://bit.ly/dan-abramov'
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Dan Abrahmov</p>
                  </Center>
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