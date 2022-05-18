import CardMovie from "../../components/CardMovies";
import Header from "../../components/Header";
import { VStack } from "@chakra-ui/react";

const Home = () => {
  return (
    <VStack>
      <Header />
      <CardMovie />
    </VStack>
  );
};
export default Home;
