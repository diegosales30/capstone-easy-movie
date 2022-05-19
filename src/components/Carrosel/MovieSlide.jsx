import './styles.css'
import 'swiper/css'
import 'swiper/css/bundle'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination } from 'swiper'

const MovieSlide = () => {

  return(
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={6}
        coverflowEffect={[
          // rotate: 50,
          // stretch: 0,
          // depth: 100,
          // modifier: 1,
          // slideShadows: true,
        ]}
        pagination={true}
        slidesPerView={"auto"}
        modules={[EffectCoverflow, Pagination]}
        className='product-images-slider-thumbs'
      >
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg'} alt="movie imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg'} alt="movie imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg'} alt="movie imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg'} alt="movie imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg'} alt="movie imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg'} alt="movie imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg'} alt="movie imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg'} alt="movie imagem" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product-images-slider-thumbs-wrapper">
            <img src={'https://disneyplusbrasil.com.br/wp-content/uploads/2022/02/Doutor-Estranho-e-Wanda-750x422.jpg'} alt="movie imagem" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default MovieSlide;