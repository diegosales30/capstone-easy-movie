// import CardMovie from "../../components/CardMovies";
// import Header from "../../components/Header";
// import { VStack } from "@chakra-ui/react";

// const Home = () => {
//   return (
//     <VStack>
//       <Header />
//       <CardMovie />
//     </VStack>
//   );
// };
// export default Home;
import CardMovie from "../../components/CardMovies";
import Header from "../../components/Header";
import { VStack, Box } from "@chakra-ui/react";
import Footer from "../../components/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import MovieSlide from "../../components/Carrosel/MovieSlide";

const Home = () => {
  return (
    <VStack>
      <Header />
      <VStack w="100%">
        <MovieSlide />

        <CardMovie />
        <Footer />
      </VStack>
    </VStack>
  );
};
export default Home;
