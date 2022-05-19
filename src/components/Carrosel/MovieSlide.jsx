import "./styles.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { Heading, Image, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { listMoviesThunkCarrosel } from "../../store/modules/moviesAll/thunk";
import { useEffect } from "react";

const MovieSlide = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMoviesThunkCarrosel());
  }, []);
  const movies = useSelector((state) => state.moviesCarrosel);

  const filtrado = movies.filter((item) => item.poster !== "");

  return (
    <>
      <VStack w="100%" h="60.2vh" maxW={1280} margin={"auto"}>
        <Heading as="h3" size="lg">
          Filmes em cartaz
        </Heading>
        {filtrado.length > 0 && (
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
            {filtrado.map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="product-images-slider-thumbs-wrapper"
                  style={{
                    height: "90%",
                  }}
                >
                  <Image
                    src={item.poster}
                    alt="movie imagem"
                    h={"100% !important"}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </VStack>
    </>
  );
};

export default MovieSlide;
