import { HStack, Box, Image, Flex, Heading } from "@chakra-ui/react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useState } from "react";
import React from "react";

const Carrosel = () => {
  const [scrollX, setScrollX] = useState(-400);

  const handleBeforeList = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleNextList = () => {
    let x = scrollX + Math.random(window.innerWidth / 2);
    let listW = 8 * 280;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <>
      <HStack
        spacing={0}
        marginTop={20}
        w={"100%"}
        maxW={"100%"}
        //bg={'yellow.100'}
        h="20vh"
        justify="flex-start"
        align="center"
        overflowX={"hidden"}
      >
        <Flex
          align={"center"}
          justify={"center"}
          w={"40px"}
          h={"200px"}
          bg={"rgba(0,0,0,0.3)"}
          cursor={"pointer"}
          position="absolute"
          color="white"
          left={0}
          zIndex={99}
          opacity={0}
          _hover={{ opacity: "1", transition: "all ease 0.5s" }}
          onClick={handleBeforeList}
        >
          <MdNavigateBefore fontSize={"50"} />
        </Flex>
        <Flex
          align={"center"}
          justify={"center"}
          w={"40px"}
          h={"200px"}
          bg={"rgba(0,0,0,0.1)"}
          cursor={"pointer"}
          position="absolute"
          color="white"
          right={0}
          zIndex={99}
          opacity={0}
          _hover={{ opacity: "1", transition: "all ease 0.5s" }}
          onClick={handleNextList}
        >
          <MdNavigateNext fontSize={"50"} />
        </Flex>
        <HStack bg={"yellow.100"} ml={"scrollX"} w={"90%"}>
          <Box
            minW={"280px"}
            h={"180px"}
            cursor="pointer"
            boxShadow="dark-lg"
            bg="gray.200"
            transform={"scale(0.95)"}
            _hover={{ transition: "all ease 0.2s", transform: "scale(1)" }}
          >
            <Image
              boxSize={"100%"}
              src={
                "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg"
              }
            />
          </Box>
          <Box
            minW={"280px"}
            h={"180px"}
            cursor="pointer"
            boxShadow="dark-lg"
            bg="gray.200"
            transform={"scale(0.95)"}
            _hover={{ transition: "all ease 0.2s", transform: "scale(1)" }}
          >
            <Image
              boxSize={"100%"}
              src={
                "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg"
              }
            />
          </Box>
          <Box
            minW={"280px"}
            h={"180px"}
            cursor="pointer"
            boxShadow="dark-lg"
            bg="gray.200"
            transform={"scale(0.95)"}
            _hover={{ transition: "all ease 0.2s", transform: "scale(1)" }}
          >
            <Image
              boxSize={"100%"}
              src={
                "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg"
              }
            />
          </Box>
          <Box
            minW={"280px"}
            h={"180px"}
            cursor="pointer"
            boxShadow="dark-lg"
            bg="gray.200"
            transform={"scale(0.95)"}
            _hover={{ transition: "all ease 0.2s", transform: "scale(1)" }}
          >
            <Image
              boxSize={"100%"}
              src={
                "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg"
              }
            />
          </Box>
          <Box
            minW={"280px"}
            h={"180px"}
            cursor="pointer"
            boxShadow="dark-lg"
            bg="gray.200"
            transform={"scale(0.95)"}
            _hover={{ transition: "all ease 0.2s", transform: "scale(1)" }}
          >
            <Image
              boxSize={"100%"}
              src={
                "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg"
              }
            />
          </Box>
          <Box
            minW={"280px"}
            h={"180px"}
            cursor="pointer"
            boxShadow="dark-lg"
            bg="gray.200"
            transform={"scale(0.95)"}
            _hover={{ transition: "all ease 0.2s", transform: "scale(1)" }}
          >
            <Image
              boxSize={"100%"}
              src={
                "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg"
              }
            />
          </Box>
          <Box
            minW={"280px"}
            h={"180px"}
            cursor="pointer"
            boxShadow="dark-lg"
            bg="gray.200"
            transform={"scale(0.95)"}
            _hover={{ transition: "all ease 0.2s", transform: "scale(1)" }}
          >
            <Image
              boxSize={"100%"}
              src={
                "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg"
              }
            />
          </Box>
          <Box
            minW={"280px"}
            h={"180px"}
            cursor="pointer"
            boxShadow="dark-lg"
            bg="gray.200"
            transform={"scale(0.95)"}
            _hover={{ transition: "all ease 0.2s", transform: "scale(1)" }}
          >
            <Image
              boxSize={"100%"}
              src={
                "https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg"
              }
            />
          </Box>
        </HStack>
      </HStack>
    </>
  );
};

export default Carrosel;
