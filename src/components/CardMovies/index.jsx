import {
  Flex,
  Box,
  Text,
  Image,
  chakra,
  Tooltip,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Link,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listMoviesThunk } from "../../store/modules/movies/thunk";
import { toast } from "react-toastify";

const Rating = ({ rating, numReviews }) => {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
};

const CardMovie = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [info, setInfo] = useState({});
  let [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const token = JSON.stringify(localStorage.getItem("@token"));
  const moviesData = useSelector((state) => state.movies);
  const searchMovies = useSelector((state) => state.moviesSearch)

  useEffect(() => {
    dispatch(listMoviesThunk(page));
  }, [page]);

  return (
    <>
      <Flex
        p={10}
        w="100%"
        maxW='1280px'
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        flexWrap="wrap"
        padding="40px 10%"
      >
    
      {searchMovies.length === 0 ?
      <>
        {moviesData.map((movie) => (
          <Box
            bg="#F5F4F3"
            _dark={{ bg: "#6666" }}
            maxW="sm"
            width="200px"
            height="335px"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            d="flex"
            flexDirection="column"
            margin="10px"
            key={movie.id}
            _hover={{ transition: 'all 0.7s', transform: 'scale(1.1)'}}
          > 
            <Image
              src={movie.image}
              alt={`Picture of ${movie.name}`}
              roundedTop="lg"
              width="100%"
              height="250px"
            />
            <Box p="4" display="flex" flexDirection="column">
              <Box d="flex" alignItems="baseline" flexDirection="column">
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                  display="flex"
                  w="100%"
                >
                  <Flex
                    align={'center'}
                    justify='flex-start'
                    width="155px"
                  >
                    <Text
                      fontSize={'1xl'}
                      fontWeight='semibold'
                      textAlign={'left'}
                      fontFamily='Helvetica, sans-serif'
                      noOfLines={2}
                    >
                      {movie.name}
                    </Text>
                  </Flex>
                  <Tooltip
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1em"}
                  >
                    <chakra.a href={"#"} display={"flex"}>
                      <Button
                        fontFamily="sans-serif"
                        bg={'#E50914'}
                        color="white"
                        size="xs"
                        alignSelf={"center"}
                        onClick={() => {
                          onOpen();
                          setInfo(movie);
                        }}
                      >
                        Ver Mais
                      </Button>
                    </chakra.a>
                  </Tooltip>
                </Flex>
              </Box>
            </Box>
          </Box>
        ))}
        </>
        :
        <>              
        {searchMovies.map((movie) => (
          <Box
            bg="#F5F4F3"
            _dark={{ bg: "#6666" }}
            maxW="sm"
            width="260px"
            height="335px"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            d="flex"
            flexDirection="column"
            margin="10px"
            key={movie.id}
            _hover={{ transition: 'all 0.7s', transform: 'scale(1.1)'}}
          > 
            <Image
              src={movie.image}
              alt={`Picture of ${movie.name}`}
              roundedTop="lg"
              width="100%"
              height="250px"
            />
            <Box p="4" display="flex" flexDirection="column">
              <Box d="flex" alignItems="baseline" flexDirection="column">
                <Flex
                  mt="1"
                  justifyContent="space-between"
                  alignContent="center"
                  display="flex"
                  w="100%"
                >
                  <Flex
                    align={'center'}
                    justify='flex-start'
                    width="155px"
                  >
                    <Text
                      fontSize={'1xl'}
                      fontWeight='semibold'
                      textAlign={'left'}
                      fontFamily='Helvetica, sans-serif'
                      noOfLines={1}
                    >
                      {movie.name}
                    </Text>
                  </Flex>
                  <Tooltip
                    bg="white"
                    placement={"top"}
                    color={"gray.800"}
                    fontSize={"1em"}
                  >
                    <chakra.a href={"#"} display={"flex"}>
                      <Button
                        fontFamily="sans-serif"
                        bg={'#E50914'}
                        color="white"
                        size="xs"
                        alignSelf={"center"}
                        onClick={() => {
                          onOpen();
                          setInfo(movie);
                        }}
                      >
                        Ver Mais
                      </Button>
                    </chakra.a>
                  </Tooltip>
                </Flex>
              </Box>
            </Box>
          </Box>
        ))}
        </> 
      }
  
        <Box>
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader textAlign="center" fontSize="26px">
                {info.name}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Flex
                  p={0}
                  w="90%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  flexWrap="wrap"
                  height="auto"
                  fontFamily="sans-serif"
                  margin="0 auto"
                >
                  <Image
                    src={info.image}
                    alt={`Picture of ${info.name}`}
                    roundedTop="lg"
                    width="220px"
                    height="250px"
                  />
                  <Box
                    margin="10px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    textAlign="left"
                  >
                    <Box
                      as="h5"
                      fontSize="13px"
                      fontWeight="semibold"
                      marginBottom="5px"
                    >
                      Categoria: {info.category}
                    </Box>
                    <Box
                      as="h5"
                      fontSize="13px"
                      fontWeight="semibold"
                      marginBottom="5px"
                    >
                      Duração: {info.duration} Minutos
                    </Box>
                    <Box
                      as="h5"
                      fontSize="13px"
                      fontWeight="semibold"
                      marginBottom="5px"
                    >
                      Classificação Indicativa: {info.age_rating === 0 ? "Livre" : info.age_rating + " anos"}
                    </Box>
                    <Box
                      as="h5"
                      fontSize="13px"
                      fontWeight="semibold"
                      marginBottom="10px"
                    >
                      Data de Lançamento: {info.release_year}
                    </Box>
                    <Box
                      as="h5"
                      fontSize="13px"
                      fontWeight="semibold"
                      marginBottom="10px"
                    >
                      Sinopse: {info.description}
                    </Box>

                    <Box
                      as="h5"
                      fontSize="13px"
                      fontWeight="semibold"
                      marginBottom="15px"
                      marginTop="15px"
                    >
                      <Link
                        target="_blank"
                        border="1px solid black"
                        p="5px"
                        _dark={{ border: "1px solid white" }}
                        borderRadius="5px"
                        href={info.trailer}
                      >
                        Assistir Trailer
                      </Link>
                      {/* <iframe width="100%" height="250px" src="https://www.youtube.com/embed/X23XCFgdh2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    </Box>

                    <Box
                      as="h5"
                      fontSize="13px"
                      fontWeight="semibold"
                      marginBottom="10px"
                    >
                      Plataformas de Streaming: {info.plataform_stream}
                    </Box>
                  {info.movie_session.status && 
                    <Button
                    bg={'#E50914'}
                    color="white"
                    width="200px"
                    mt="10px"
                    onClick={() => {
                      if (token === null) {
                        toast.error("Para comprar ingresso tem que logar");
                      }
                    }}
                    >
                      Comprar Ingresso
                    </Button>
                    }
                  </Box>
                </Flex>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Flex>
      <Box marginTop="10px" display="flex" justifyContent="center">
        {page <= 1 ?
          <Button
            fontFamily="sans-serif"
            bg={'#E50914'}
            color="white"
            marginLeft="10px"
            onClick={() => setPage((page += 1))}
          >
            Proxima Pagina
          </Button>
        :
        <>
          <Button
            fontFamily="sans-serif"
            bg={'#E50914'}
            color="white"
            onClick={() => setPage((page -= 1))}
          >
            Pagina Anterior
          </Button>
          <Button
          fontFamily="sans-serif"
          bg={'#E50914'}
          color="white"
          marginLeft="10px"
          onClick={() => setPage((page += 1))}
          >
          Proxima Pagina
          </Button>
        </>
        }
      </Box>
    </>
  );
};

export default CardMovie;
