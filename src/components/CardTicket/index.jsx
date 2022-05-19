import { VStack, Box, Text, Select, Image, Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer, } from "@chakra-ui/react";
  import axios from "axios";
  import { useState, useEffect } from "react";

  
  const CardTicket = () => {
    const rooms = [
      {
        name: "Sala 1",
        time: "14:00",
        version: "Dublado",
        inteira: 40,
        meia: 20,
      },
      {
        name: "Sala 2",
        time: "17:30",
        version: "Dublado",
        inteira: 40,
        meia: 20,
      },
      {
        name: "Sala 3",
        time: "15:00",
        version: "Legendado",
        inteira: 40,
        meia: 20,
      },
      {
        name: "Sala 4",
        time: "21:00",
        version: "Dublado",
        inteira: 40,
        meia: 20,
      },
      {
        name: "Sala 5",
        time: "18:00",
        version: "Legendado",
        inteira: 40,
        meia: 20,
      },
      {
        name: "Sala 3D",
        time: "14:40",
        version: "Dublado",
        inteira: 40,
        meia: 20,
      },
    ];
  
    const [selectedMovie, setSelectedMovie] = useState([]);
    const [selectedCity, setSelectedCity] = useState([]);
    const [selectedCinema, setSelectedCinema] = useState([]);
    const [isSelected, setIsSelected] = useState(false);
    const [cityData, setCityData] = useState([])
    const [selectedRoom, setSelectedRoom] = useState([])
    const [isOn, setIsOn] = useState(false)
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
  
    const getCity = () => {
      axios.get("https://easy-movie.herokuapp.com/city")
      .then((response) => {
        setCityData(response.data)
      })
      .catch((err) => {
      })
    }

    
  
  
    useEffect(() => {
      getMovie();
      getCity()
    }, []);
  
    const handleCity = (event) => {
         setSelectedCity(JSON.parse(event.target.value))
 
    };

    const renderPrices = () => {
        const findCity = cityData.find((city) => selectedCity[1] === city.name)
        const findCine = findCity.cine.find((cine) =>  selectedCinema.toString() == cine.name.toString())
        console.log(findCine)

    }

  
    const handleCinema = (event) => {
      setSelectedCinema(JSON.parse(event.target.value));
      setIsSelected(true);
      renderPrices()
    };
  
    const handleRoom = (e) => {
      setSelectedRoom(e)
      setIsOn(true)
    }
  
    return (
      <>
        {selectedMovie.map(
          (movie) => (
            (
              <Box
                key={movie.id}
                m="auto"
                mt="10px"
                w="90vw"
                h="90vh"
                bg="#eeee"
                display="flex"
                flex-direction="row"
                justifyContent="space-around"
              >
                <Box m="20px" w="40vw">
                  <Text textAlign="center" mb="30px" fontWeight="700">
                    {movie.name}
                  </Text>
                  <Select
                    w="200px"
                    mb="10px"
                    placeholder="Escolha a Cidade"
                    onClick={handleCity}
                  >
                    {movie.movie_session.city.map((city) => (
                      <option w="200px" value={JSON.stringify([...city.cinemas, city.name])}>
                        {city.name}
                      </option>
                    ))}
                  </Select>
                  <Select
                    w="200px"
                    placeholder="Escolha o Cinema"
                    onClick={(e) => handleCinema(e)}
                  >
                    {selectedCity.map((cinema) => (
                      <option w="200px" value={JSON.stringify(cinema.name)}>
                        {cinema.name}
                      </option>
                    ))}
                  </Select>
  
                  {isSelected ? (
                    <Box mt="30px">
                      <TableContainer bg="#E50C17" color="white" mt="20px">
                      <Table variant="simple" size="sm">
                        <Thead>
                          <Tr>
                            <Th color="white">Sala</Th>
                            <Th color="white">Horário</Th>
                            <Th color="white">Versão</Th>
                            <Th color="white">Inteira</Th>
                            <Th color="white">Meia</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {rooms.map((room) => (
                            <Tr onClick={() => handleRoom(room)}>
                              <Td>{room.name}</Td>
                              <Td>{room.time}</Td>
                              <Td>{room.version}</Td>
                              <Td>{room.inteira.toFixed(2)}</Td>
                              <Td>{room.meia.toFixed(2)}</Td>
                            </Tr>
                          ))}
                        </Tbody>
                      </Table>
                    </TableContainer>
                    </Box>
                  ) : (
                    <Box mt="30px">
                      <Text>Escolha onde quer assistir o filme</Text>
                    </Box>
                  )}
                {isOn ? (
                  <Box>
                    <Text>Você escolheu:</Text>
                  
                  </Box>
  
                ) : (<Box></Box>)}
                </Box>
                <Box m="20px">
                  <Image src={movie.image} w="30vw" h="80vh" />
                </Box>
              </Box>
            )
          )
        )}
      </>
    );
  };
  
  export default CardTicket;