import CardMovie from "../../components/CardMovies";
import Header from "../../components/Header";
import { VStack, Box } from "@chakra-ui/react";
import Footer from "../../components/Footer";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import MovieSlide from "../../components/Carrosel/MovieSlide";

const Home = () => {
  
  return (
    <VStack>
      <Header />
      <VStack
        w='100%'
      >
        <Box
          display={'flex'}
          mt={'5rem'}
          w={'80%'}
          h={'49.2vh'}
        >
          <MovieSlide />
        </Box>
        <CardMovie />
        <Footer />
      </VStack>
    </VStack>
  );
};
export default Home;
