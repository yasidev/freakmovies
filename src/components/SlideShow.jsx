import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import "../styleswiper.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { baseImgURL } from "./config";
import { NavLink } from "react-router-dom";
import SlideshowCard from "./slideshowCard/SlideshowCard";

export default function SlideShow() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies();
  }, []);

  async function getTrendingMovies() {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=e53bab22614cda1579762df1ee0a0c4b"
    );
    setTrendingMovies(data.results);
  }

  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper bg-rose-700"
        autoplay
      >
        {trendingMovies.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <NavLink to={`/movie/${item.id}`}>
                <SlideshowCard item={item} />
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
