import React from "react";
import "./Residencies.css";
import ResidencieItem from "./ResidencieItem";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";


const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};

const Residencies = () => {

  return (
    <section className="r-wrapper">
      <div className="r-container container">
        <div className="header">
          <span>Best Choices</span>
          <span>Popular Residencies</span>
        </div>
        <Swiper
          className="swiper"
          breakpoints={{
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          <div className="items">
            {data.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ResidencieItem item={item}/>
              </SwiperSlide>
            ))}
          </div>
          <SliderButtons />
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
