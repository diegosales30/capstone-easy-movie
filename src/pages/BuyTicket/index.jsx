import { 
  Box, 
  Text, 
  Select, 
  Image, 
  Button,
  VStack,
  HStack,
  Heading
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const BuyTicket = () => {
  const id = localStorage.getItem("@idMovie");
  const navigate = useNavigate()

  const [isSelected, setIsSelected] = useState(false); // BOLEANO PARA ABRIR OPÇÕES DE COMPRA

  const [selectedMovie, setSelectedMovie] = useState([]); // FILME SELECIONADO PEGO DA API
  // console.log(selectedMovie, 'selectedMovie')
  const [selectedCity, setSelectedCity] = useState([]); // CIDADE SELECIONADA COM TODAS AS INFORMAÇÕES
  const {cinemas} = selectedCity // DESTRUTURAÇÃO PARA FAZER A PRÓXIMA ETAPA, ESCOLHER O CINEMA
  // console.log(selectedCity, 'selectedCity')
  // const [selectedCine, setSelectedCine] = useState([]) // CINEMA SELECIONADA COMO STRING
  // console.log(selectedCine, 'selectedCine')
  const [selectRoom, setSelectRoom] = useState([])
  // console.log(selectRoom, 'selectRoom')
  
  const [citys, setCitys] = useState([]) //PEGANDO AS CIDADES NA API
  // console.log(citys, 'citys')
  const [enterCity, setEnterCity] = useState([])
  // console.log(enterCity, 'enterCity')
  const [enterCine, setEnterCine] = useState([])
  // console.log(enterCine, 'enterCine')
const [enterRoom, setEnterRoom] = useState([])
// console.log(enterRoom, 'enterRoom')
  
  const [buyInfo , setBuyInfo] = useState([]) // INFORMAÇÕES DA COMPRA
  const [toRender, setToRender] = useState(false) // ABRIR BOTÃO DE COMPRA

  //PUXANDO DADOS DA API
  const getMovie = () => {
    axios
      .get(`https://easy-movie.herokuapp.com/movies?id=${id}`)
      .then((response) => {
        setSelectedMovie(response.data);
        // console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getCity = ( ) =>{
    axios
    .get('https://easy-movie.herokuapp.com/city')
    .then((response)=> setCitys(response.data))
  }

  useEffect(() => {
    getMovie();
    getCity()
  }, []);
//##
  
    const handleCity = (event) => {
      setSelectedCity(event)
      setEnterCity(citys.find((city) => city.name === event.name))
    }

  const handleCinema = (event) => {
    // console.log(event, 'event')
    // setSelectedCine(event)
    setSelectRoom(event.rooms)
    setEnterCine(enterCity.cine.find((cine) => cine.name === event.name))

    setEnterRoom(enterCine.rooms.filter((room, index) => {
      const search = selectRoom.find((element) => element === room.name)
      // console.log(room.name, ' - ', search)
      return room.name === search}))
    setIsSelected(true);
  };

  const renderInfo = (name, time, price) => {
    // console.log([name, time, price], 'info')
    setBuyInfo({name, time, price})
    setToRender(true)
  }
  
  const RenderInfo = () => {
    // console.log(selectedMovie)
    return(
      <VStack
        justify={'space-around'}
        align='center'
      >
        <HStack
        spacing={5}
        mb={'1rem'}
        border={'1px solid black'}
        px={5}
        >
          <Text>{buyInfo.name}</Text>
          <Text>{buyInfo.time}</Text>
          {/* <Text>{buyInfo.version}</Text> */}
          <Text>Valor total: R${buyInfo.price.toFixed(2)}</Text>
        </HStack>
        <HStack
          w={'40%'}
        >
          <Button 
            color={'white'} 
            bg={'#E50914'}
            width={'100%'}
            onClick={()=>navigate('/')}
          >Pagar</Button>
        </HStack>
      </VStack>
    )
  }
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX PAGE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  return (
    <VStack>
      <Header />
      {/* NECESSÁRIO ESTAR NO MAP, POIS O selectedMovie RETORNA EM UMA ARRAY */}
      {selectedMovie.map(
        (movie) => (
          <HStack
            key={movie.id}
            m="auto"
            w="90vw"
            h="90vh"
            justify={'space-around'}
          >
            <Box 
              m="20px" 
              w="30vw"
              h={'90%'} 
              border={'2px solid'}
              borderRadius={'10px'}
            >
              <Heading fontSize={'3xl'} textAlign="center" mt="1rem" mb="1.5rem" fontWeight="700">
                {movie.name}
              </Heading>
              <HStack
                align={'center'}
                justify={'center'}
                w={'100%'}
                h={'30px'}
              >  
                <Select
                  w="35%"
                  placeholder="Escolha a cidade"
                  onClick={(e)=>handleCity(JSON.parse(e.target.value))}
                >
                  {movie.movie_session.city.map((city, index) => (
                    <option 
                      key={index}
                      w="200px" 
                      value={JSON.stringify(city)}>
                      {city.name}
                    </option>
                  ))}
                </Select>
                <Select
                  w="35%"
                  placeholder="Escolha o Cinema"
                  onClick={(e) => {handleCinema(JSON.parse(e.target.value))}}
                >
                  {cinemas?.map((cinema,index) => (
                    <option 
                      key={index}
                      w="200px" 
                      value={JSON.stringify(cinema)}>
                      {cinema.name}
                    </option>
                  ))}
                </Select>
              </HStack>

              {isSelected ? (
                <VStack mt="30px">
                  {
                    enterRoom.map((room, index) => {
                      // console.log(room, index)
                      return room.time.map((time, index) => {
                        // console.log(room.name, time)
                        return (
                          <HStack
                          key={index}
                          w="90%"
                          py={5}
                          spacing={1}
                          border="1px"
                          borderColor="black"
                          justifyContent="space-around"
                          alignItems="center"
                          cursor={'pointer'}
                          onClick={ () =>renderInfo(room.name, time, enterCine.price.weekend)}
                        >
                          <Text w="60px">{room.name}</Text>
                          
                          <Text>{time}</Text>
                          <Text>R${enterCine.price.weekend.toFixed(2)}</Text>
                        </HStack>
                        )
                      })
                    })
                  }
                </VStack>
                ) : (
                  <Box mt="30px">
                  <Text textAlign={'center'}>Escolha onde quer assistir o filme</Text>
                </Box>
              )}
              {toRender &&
                <VStack
                w={'90%'}
                ml='1.7rem'
                mt={'1rem'}
                spacing={5}
                py={3}
                >
                  <Heading fontSize={'2xl'}>Você escolheu:</Heading>
                  <RenderInfo info={buyInfo}/>
                </VStack>
              }
            </Box>
            <Box m="20px">
              <Image src={movie.image} w="30vw" h="80vh"/>
            </Box>
          </HStack>
          )
          )}
          </VStack>
          );
        };
        
        export default BuyTicket;
        