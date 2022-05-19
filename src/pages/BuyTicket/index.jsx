import { Box, Text, Select, Image, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BuyTicket = ({ movie }) => {
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

  const [selectedMovie, setSelectedMovie] = useState([]);

  const [selectedCity, setSelectedCity] = useState([]);
  const navigate = useNavigate()
  const {cinemas} = selectedCity

  const [selectedCinema, setSelectedCinema] = useState([]);

  const [isSelected, setIsSelected] = useState(false);

  const [rooms, setRooms] = useState([])
  const [info , setInfo] = useState([])

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
  const [toRender, setToRender] = useState(false)

  // const renderPrice = (e) =>{

  //   const cityTarget = rooms.find((city)=>city.name === selectedCity.name )
    
  //   //const cineTarget = cityTarget.cine.find((cine)=> JSON.parse(e.target.value)=== cine.name)
  //   //const roomsTarget = cineTarget.rooms.filter((room, i)=>console.log(room.name , selectedCity.cinemas[0].rooms[i])) 

  // }
  const renderInfo = (info) =>{
    setInfo(info)
    setToRender(true)
  }
  const RenderInfo = ({info}) =>{
    return(
    <Box>
      <Text>{info.name}</Text>
      <Text>{info.time}</Text>
      <Text>{info.version}</Text>
      <Text>Valor total: {info.inteira}</Text>
      <Button onClick={()=>navigate('/')}>Pagar</Button>
    </Box>

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

  const handleCinema = (event) => {
 
    setSelectedCinema(JSON.parse(event.target.value));
    setIsSelected(true);

  };

  return (
    <>
      {selectedMovie.map(
        (movie) => (
            <Box
              key={movie.id}
              m="auto"
              w="90vw"
              h="90vh"
              bg="#eeee"
              display="flex"
              flex-direction="row"
              justifyContent="space-around"
            >
              <Box m="20px" w="30vw">
                <Text textAlign="center" mb="30px" fontWeight="700">
                  {movie.name}
                </Text>
                <Select
                  w="200px"
                  mb="10px"
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
                  w="200px"
                  placeholder="Escolha o Cinema"
                  onClick={
                    (e)=>{

                      handleCinema(e)
                    }}
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

                {isSelected ? (
                  <Box mt="30px">
                    {rooms1.map((room,index) => (
                      <Box
                        onClick={ () =>renderInfo(room)}
                        key={index}
                        display="flex"
                        flex-direction="row"
                        w="30vw"
                        border="1px"
                        borderColor="black"
                        justifyContent="space-around"
                        textAlign="center"
                        alignItems="center"
                      >
                        <Text w="60px">{room.name}</Text>
                        <Text>{room.time}</Text>
                        <Text w="90px" textAlign="center">
                          {room.version}
                        </Text>
                        <Text>{room.inteira}</Text>
                        <Text>{room.meia}</Text>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Box mt="30px">
                    <Text>Escolha onde quer assistir o filme</Text>
                  </Box>
                )}
                {toRender &&
                 <Box>
                   <Text>Você escolheu:</Text>
                   <RenderInfo info={info}/>
                 </Box>
                
                }
              </Box>
              <Box m="20px">
                <Image src={movie.image} w="30vw" h="80vh" />
              </Box>
            </Box>
          )
      )}
    </>
  );
};

export default BuyTicket;
