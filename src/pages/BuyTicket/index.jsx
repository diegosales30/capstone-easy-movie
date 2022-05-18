import { Box, Text, Select, Image } from "@chakra-ui/react"
import axios from "axios"
import {useState, useEffect} from "react";



const BuyTicket = ({ movie }) => {

    const rooms = [
        {"name":"Sala 1", 
          "time": "14:00",
          "version": "Dublado",
          "inteira": 40,
            "meia": 20
        },
        {"name":"Sala 2",
          "time": "17:30",
          "version": "Dublado",
          "inteira": 40,
          "meia": 20
        },
        {"name":"Sala 3",
          "time": "15:00",
          "version": "Legendado",
          "inteira": 40,
          "meia": 20
        },
        {"name":"Sala 4",
          "time": "21:00",
          "version": "Dublado",
          "inteira": 40,
          "meia": 20
        },
        {"name":"Sala 5",
          "time": "18:00",
          "version": "Legendado",
          "inteira": 40,
          "meia": 20
        },
        {"name":"Sala 3D",
          "time": "14:40",
          "version": "Dublado",
          "inteira": 40,
          "meia": 20
        }
      ]

    const [selectedMovie, setSelectedMovie] = useState([])
    const [selectedCity, setSelectedCity] = useState([])
    const [selectedCinema, setSelectedCinema] = useState([])
    const [isSelected, setIsSelected] = useState(false)

    const setMovie = () => {
        axios
        .get(`https://easy-movie.herokuapp.com/movies?id=3`)
        .then((response) => {
            setSelectedMovie(response.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }

    useEffect(() => {
        setMovie();
      }, []);

    const handleCity = (event) => {
        setSelectedCity(JSON.parse(event.target.value))
        console.log(selectedCity)
        setIsSelected(false)
    }

    const handleCinema = (event) => {
        setSelectedCinema(JSON.parse(event.target.value))
        setIsSelected(true)
        console.log(selectedCinema)
    }


    return (

        <>
            {selectedMovie.map((movie) => (
                <Box m="auto" w="90vw" h="90vh" bg="#eeee" display="flex" flex-direction="row" justifyContent="space-around" >
                    <Box m="20px" w="30vw">
                        <Text textAlign="center" mb="30px" fontWeight="700">{movie.name}</Text>
                        <Select w="200px" mb="10px" placeholder='Escolha a cidade'onChange={handleCity}>
                        {movie.movie_session.city.map((city) => (
                            <option w="200px" value={JSON.stringify(city.cinemas)}>{city.name}</option>
                        ))}
                        </Select>
                        <Select w="200px" placeholder='Escolha o Cinema' onChange={handleCinema}>
                        {selectedCity.map((cinema) => (
                            <option w="200px" value={JSON.stringify(cinema.rooms)}>{cinema.name}</option>
                        ))}
                        </Select>
                        
                        {isSelected ? <Box mt="30px">{rooms.map((room) => 
                            <Box display="flex" flex-direction="row" w="30vw" border="1px" borderColor="black" justifyContent="space-around" textAlign="center" alignItems="center">
                                <Text w="60px">{room.name}</Text>
                                <Text>{room.time}</Text>
                                <Text w="90px" textAlign="center">{room.version}</Text>
                                <Text>{room.inteira.toFixed(2)}</Text>
                                <Text>{room.meia.toFixed(2)}</Text>

                            </Box>
                        )}
                        </Box>
                         : 
                        <Box mt="30px">
                            <Text>Escolha onde quer assistir o filme</Text>
                        </Box>}
                    </Box>
                    <Box m="20px">
                        <Image src={movie.image} w="30vw" h="80vh"/>
                    </Box>
                </Box>
            ))}

        </>
    )
}

export default BuyTicket;