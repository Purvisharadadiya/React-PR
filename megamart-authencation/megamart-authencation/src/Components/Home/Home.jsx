import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css';
import { Pagination, Autoplay } from 'swiper/modules';
import BrandSection from '../BrandOffers/BrandOffers';
import ExploreMore from '../ExploreMore/ExploreMore';
import HotPicks from '../hostpicks/Hostpicks';





import img1 from '../../img/11.png';
import img2 from '../../img/12.png';
import img3 from '../../img/13.png';
import img4 from '../../img/img1.png';
import img5 from '../../img/img2.png';
import img6 from '../../img/img3.png';


const Home = () => {
  return (
    <div className="home-page">
      
      <div className="home-slider">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
        >
          <SwiperSlide><div className="banner"><img src={img1} alt="Banner 1" /></div></SwiperSlide>
          <SwiperSlide><div className="banner"><img src={img2} alt="Banner 2" /></div></SwiperSlide>
          <SwiperSlide><div className="banner"><img src={img3} alt="Banner 3" /></div></SwiperSlide>
        </Swiper>
      </div>

     
      <ExploreMore />
      <BrandSection />
      <HotPicks />
    
      
      <div className="home-slider second-slider">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
        >
          <SwiperSlide><div className="banner"><img src={img4} alt="Banner 4" /></div></SwiperSlide>
          <SwiperSlide><div className="banner"><img src={img5} alt="Banner 5" /></div></SwiperSlide>
          <SwiperSlide><div className="banner"><img src={img6} alt="Banner 6" /></div></SwiperSlide>
        </Swiper>
        
       
        
       
        
      </div>
    </div>
    
    
  );
};

export default Home;
