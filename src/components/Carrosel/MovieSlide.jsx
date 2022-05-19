import "./styles.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { Heading, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { listMoviesThunkCarrosel } from "../../store/modules/moviesAll/thunk";
import { useEffect } from "react";

const MovieSlide = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.moviesCarrosel);

  useEffect(() => {
    dispatch(listMoviesThunkCarrosel());
  }, []);

  const cartaz = movies.filter((movie) => movie.movie_session.status);
  console.log(cartaz);
  return (
    <>
      <VStack w="100%" h="49.2vh" maxW={1280} margin={"auto"}>
        <Heading as="h3" size="lg">
          Filmes em cartaz
        </Heading>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={6}
          coverflowEffect={
            [
              // rotate: 50,
              // stretch: 0,
              // depth: 100,
              // modifier: 1,
              // slideShadows: true,
            ]
          }
          autoplay={2500}
          pagination={true}
          slidesPerView={"auto"}
          modules={[EffectCoverflow, Pagination]}
          className="product-images-slider-thumbs"
        >
        
           {cartaz.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="product-images-slider-thumbs-wrapper">
                <img src={movie.poster} alt="movie imagem"/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </VStack>
    </>
  );
};

export default MovieSlide;
