import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; 
import "./HostPicks.css";

const items = [
  { title: "JACKETS", img: "/src/img/1.png" },
  { title: "SWEATSHIRTS", img: "/src/img/2.png" },
  { title: "SWEATERS", img: "/src/img/3.png" },
  { title: "SUITS", img: "/src/img/4.png" },
  { title: "BLAZERS", img: "src/img/5.png" },
   { title: "JACKETS", img: "/src/img/1.png" },
  { title: "SWEATSHIRTS", img: "/src/img/2.png" },
  { title: "SWEATERS", img: "/src/img/3.png" },
  { title: "SUITS", img: "/src/img/4.png" },
  { title: "BLAZERS", img: "src/img/5.png" },
];

const HotPicks = () => {
  return (
    <div className="hotpicks-section">
      <h2 className="title">HOT PICKS</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
        loop={true} 
        modules={[EffectCoverflow, Pagination, Autoplay]} 
        className="hotpicks-slider"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="hotpicks-slide">
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <h3>{item.title}</h3>
              <button>SHOP NOW</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HotPicks;
