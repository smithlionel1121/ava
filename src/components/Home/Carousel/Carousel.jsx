import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper-bundle.css";
import "./Carousel.css";

SwiperCore.use([Navigation]);

const Carousel = () => {
  const [slides, setSlides] = useState([]);

  async function getBannerDetails() {
    const res = await fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
    );
    const data = res.json();
    return data;
  }

  useEffect(() => {
    const fetchData = async () => {
      let arr = [];
      const data = await getBannerDetails();
      data?.Details?.forEach((element, idx) => {
        arr.push(
          <SwiperSlide key={`slide-${idx}`} tag="li" className="swiper-slide">
            <img
              className="slide-image"
              src={element.ImageUrl}
              alt={`Slide ${element.Title}`}
            />
          </SwiperSlide>
        );
      });
      setSlides(arr);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {!!slides.length && (
        <Swiper
          className="container"
          key={slides.length}
          id="main"
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          spaceBetween={0}
          slidesPerView={1}
        >
          {slides}
        </Swiper>
      )}
    </React.Fragment>
  );
};

export default Carousel;
