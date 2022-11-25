import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { apiKey, baseImgURL, baseURL, putImage } from "./config";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { NavLink } from "react-router-dom";

export default function TVPopular() {
  const [tvMovies, setTvMovies] = useState([]);

  async function handleTvPopular() {
    try {
      const { data } = await axios.get(
        `${baseURL}/tv/popular?api_key=${apiKey}`
      );
      setTvMovies(data.results);
    } catch {
      console.log("Vay Bad Shod");
    }
  }

  useEffect(() => {
    handleTvPopular();
  }, []);

  return (
    <section>
      <h2 className="text-2xl text-rose-700 ml-5 py-10">Popular TV Series</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper my-10"
        autoplay
      >
        {tvMovies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <NavLink to={`/movie/${movie.id}`}>
                <div>
                  <img className="max-h-80" src={putImage(movie.poster_path)} />
                  <p className="text-rose-700">{movie.name}</p>
                </div>
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
