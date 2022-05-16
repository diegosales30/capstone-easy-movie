import {
    Flex,
    Box,
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
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listMoviesThunk } from '../../store/modules/movies/thunk';
import { toast } from 'react-toastify';



  
function Rating({ rating, numReviews }) {
      
    return (
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
}
  
function CardMovie() {
    const {isOpen, onOpen, onClose} =  useDisclosure()
    const [info, setInfo] = useState({})
    let [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const token = JSON.parse(localStorage.getItem("@token"))
    const moviesData = useSelector((state) => state.movies)

    useEffect(() => {
        dispatch(listMoviesThunk(page)) 
    },[page])
    
return (
    <>
    <Flex p={10} w="100%" display="flex" alignItems="center" justifyContent="center" flexDirection="row" flexWrap="wrap">
        {moviesData.map((movie) =>  ( 
            <Box
            bg="#C4C4C4" _dark={{bg:'#6666' }}
            maxW="sm"
            width="260px"
            height="auto"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            d="flex"
            flexDirection="column"
            margin="10px"
            key={movie.id}
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
                    <Flex mt="1" justifyContent="space-between" alignContent="center" display="flex" w="100%">
                    <Box
                        fontSize="13px"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                        textAlign="left"
                        width="145px"
                        display="flex"
                        alignItems="center"
                        fontFamily="sans-serif"
                        >
                        {movie.name}
                    </Box>
                <Tooltip
                    bg="white"
                    placement={'top'}
                    color={'gray.800'}
                    fontSize={'1em'}>
                    <chakra.a href={'#'} display={'flex'}>
                    <Button fontFamily="sans-serif" colorScheme='red' size="xs" alignSelf={"center"} onClick={() => {
                        onOpen()
                        setInfo(movie)
                    }}>Ver Mais</Button>
                    </chakra.a>
                </Tooltip>
        </Flex>
            </Box>
            
        {/* <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={movie.rating} numReviews={movie.numReviews} />
            <Box fontSize="10px" color='gray.800'></Box>
        </Flex> */}
        </Box>
        </Box>
        
        ))}
        <Box>
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
        
        <ModalOverlay />
        <ModalContent>
                <ModalHeader textAlign="center" fontSize="15px">{info.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Flex p={0} w="90%" display="flex" alignItems="center" justifyContent="center" flexDirection="column" flexWrap="wrap" height="auto" fontFamily="sans-serif" margin="0 auto">
                    <Image
                        src={info.image}
                        alt={`Picture of ${info.name}`}
                        roundedTop="lg"
                        width="220px"
                        height="250px"
                        
                    />
                    <Box margin="10px" display="flex" flexDirection="column" justifyContent="center" textAlign="left">
                        <Box as="h5" fontSize="13px" fontWeight="semibold" marginBottom="5px" >
                            Categoria: {info.category} 
                        </Box>
                        <Box as="h5" fontSize="13px" fontWeight="semibold" marginBottom="5px">
                            Duração: {info.duration} Minutos
                        </Box>
                        <Box as="h5" fontSize="13px" fontWeight="semibold" marginBottom="5px">
                            Classificação Indicativa: {info.age_rating} Anos
                        </Box>
                        <Box as="h5" fontSize="13px" fontWeight="semibold" marginBottom="10px">
                            Data de Lançamento: {info.release_year} 
                        </Box>
                        <Box as="h5" fontSize="13px" fontWeight="semibold" marginBottom="10px">
                            Sinopse: {info.description} 
                        </Box>

                        <Box as="h5" fontSize="13px" fontWeight="semibold" marginBottom="15px" marginTop="15px">
                            <Link target="_blank" border="1px solid black" p="5px" _dark={{border:"1px solid white"}} borderRadius="5px" href={info.trailer}>Assistir Trailer</Link>
                            {/* <iframe width="100%" height="250px" src="https://www.youtube.com/embed/X23XCFgdh2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        </Box>

                        <Box as="h5" fontSize="13px" fontWeight="semibold" marginBottom="10px">
                            Plataformas de Streaming: {info.plataform_stream} 
                        </Box>

                        <Button colorScheme="red" width="200px" mt="10px" onClick={() => {
                            if(token === null) {
                                toast.error("Para comprar ingresso tem que logar")
                            }
                        }}
                        >Comprar Ingresso</Button>
                    </Box>
                </Flex>
                </ModalBody>
        </ModalContent>
        </Modal>
        </Box>
      </Flex>
    <Box marginTop="10px" display="flex" justifyContent="center" >
        <Button fontFamily="sans-serif" colorScheme="red" onClick={() => setPage(page -= 1)}>Pagina Anterior</Button>
        <Button fontFamily="sans-serif" colorScheme="red" marginLeft="10px" onClick={() => setPage(page += 1)}>Proxima Pagina</Button>
    </Box>
    </>
    );
  }
  
  export default CardMovie;