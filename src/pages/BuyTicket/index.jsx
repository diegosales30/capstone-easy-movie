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
  const rooms1 = [
    {
      name: "Sala 1",
      time: "14:00",
      version: "Dublado",
      inteira: 'R$ 28,00',
      meia: 'R$ 18,00',
    },
    {
      name: "Sala 2",
      time: "17:30",
      version: "Dublado",
      inteira: 'R$ 28,00',
      meia: 'R$ 8,00',
    },
    {
      name: "Sala 3",
      time: "15:00",
      version: "Legendado",
      inteira: 'R$ 38,00',
      meia: 'R$ 16,00',
    },
    {
      name: "Sala 4",
      time: "21:00",
      version: "Dublado",
      inteira: 'R$ 18,00',
      meia: 'R$ 18,00',
    },
    {
      name: "Sala 5",
      time: "18:00",
      version: "Legendado",
      inteira: 'R$ 56,00',
      meia: 'R$ 18,00',
    },
    {
      name: "Sala 3D",
      time: "14:40",
      version: "Dublado",
      inteira: 'R$ 40,00',
      meia: 'R$ 25,60',
    },
  ];

  const [selectedMovie, setSelectedMovie] = useState([]); // FILME SELECIONADO

  const [selectedCity, setSelectedCity] = useState([]); // CIDADE SELECIONADA
  const navigate = useNavigate()
  const {cinemas} = selectedCity

  const [isSelected, setIsSelected] = useState(false); // BOLEANO PARA ABRIR OPÇÕES DE COMPRA
  
  const [selectedCinema, setSelectedCinema] = useState([]); // CINEMA SELECIONADO

  const [rooms, setRooms] = useState([]) //PEGANDO A CIDADE NA API
  const [info , setInfo] = useState([]) // INFORMAÇÕES DA COMPRA
  const [toRender, setToRender] = useState(false) // ABRIR BOTÃO DE COMPRA

  const id = localStorage.getItem("@idMovie");


  const getMovie = () => {
    axios
      .get(`https://easy-movie.herokuapp.com/movies?id=${id}`)
      .then((response) => {
        setSelectedMovie(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCity = ( ) =>{
    axios
    .get('https://easy-movie.herokuapp.com/city')
    .then((response)=> setRooms(response.data))
  }


  // const renderPrice = (e) =>{

  //   const cityTarget = rooms.find((city)=>city.name === selectedCity.name )
    
  //   //const cineTarget = cityTarget.cine.find((cine)=> JSON.parse(e.target.value)=== cine.name)
  //   //const roomsTarget = cineTarget.rooms.filter((room, i)=>console.log(room.name , selectedCity.cinemas[0].rooms[i])) 

  // }

  const renderInfo = (info) => {
    setInfo(info)
    setToRender(true)
  }
  
  const RenderInfo = () => {
    console.log(selectedMovie)
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
          <Text>{info.name}</Text>
          <Text>{info.time}</Text>
          <Text>{info.version}</Text>
          <Text>Valor total: {info.inteira}</Text>
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

  useEffect(() => {
    getMovie();
    getCity()
  }, []);

  // const handleCity = (event) => {

  //   setSelectedCity(JSON.parse(event.target.value));

  //   setIsSelected(false);
  // };
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX PAGE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  const handleCinema = (event) => {
    setSelectedCinema(JSON.parse(event.target.value));
    setIsSelected(true);
  };

  return (
    <VStack>
      <Header />
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
                  onClick={(e)=>setSelectedCity(JSON.parse(e.target.value))}
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
                  onClick={(e) => {handleCinema(e)}}
                >
                  {cinemas?.map((cinema,index) => (
                    <option 
                      key={index}
                      w="200px" 
                      value={JSON.stringify(cinema.name)}>
                      {cinema.name}
                    </option>
                  ))}
                </Select>
              </HStack>

              {isSelected ? (
                <VStack mt="30px">
                  {rooms1.map((room,index) => (
                    <HStack
                      onClick={ () =>renderInfo(room)}
                      key={index}
                      w="90%"
                      py={5}
                      spacing={1}
                      border="1px"
                      borderColor="black"
                      justifyContent="space-around"
                      alignItems="center"
                      cursor={'pointer'}
                    >
                      <Text w="60px">{room.name}</Text>
                      <Text>{room.time}</Text>
                      <Text w="90px" textAlign="center">
                        {room.version}
                      </Text>
                      <Text>{room.inteira}</Text>
                      <Text>{room.meia}</Text>
                    </HStack>
                  ))}
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
                  <RenderInfo info={info}/>
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
