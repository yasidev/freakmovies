import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { apiKey, baseImgURL, baseURL, putImage } from "./config";
import { Autoplay, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import { Segmented } from "antd";

import AntLoading from "./Loading/AntLoading";

export default function SliderMain() {
  const [movies, setMovies] = useState([]);
  const [segmentValue, setSegmentValue] = useState("Movie");
  const [bg, setBg] = useState();

  async function getMovies() {
    const { data } = await axios.get(
      `${baseURL}/movie/popular?api_key=${apiKey}`
    );
    setMovies(data.results);
  }

  async function getTv() {
    const { data } = await axios.get(
      `${baseURL}/tv/popular?api_key=${apiKey}&page=1`
    );
    setMovies(data.results);
  }

  useEffect(() => {
    if (segmentValue === "Movie") {
      getMovies();
    } else {
      getTv();
    }
  }, [segmentValue]);

  return (
    <>
      <div className="flex gap-10 items-center mt-16 bg-slate-700">
        <h2 className="text-2xl text-rose-700 ml-5 py-4">Populars! </h2>
        <Segmented
          options={["Movie", "TV"]}
          value={segmentValue}
          onChange={setSegmentValue}
        />
      </div>
      {movies ? (
        <div
          style={{
            backgroundImage: ` url(${baseImgURL}/original/${bg}) `,
            backgroundSize: "cover",
          }}
        >
          <div
            className="py-24"
            style={{
              backgroundImage: "linear-gradient(to top, #00000066, #00000066)",
              width: "100%",
              height: "100%",
            }}
          >
            <Swiper
              className="overflow-visible"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 5,
                  spaceBetween: 35,
                },
                1536: {
                  slidesPerView: 6,
                  spaceBetween: 40,
                },
              }}
              navigation={false}
              modules={[Navigation, Autoplay]}
              pagination={{
                clickable: true,
              }}
              autoplay
            >
              {movies.map((movie) => {
                return (
                  <SwiperSlide
                    className="w-auto"
                    onMouseOver={() => setBg(movie.backdrop_path)}
                    key={movie.id}
                  >
                    <NavLink to={`/movie/${movie.id}`}>
                      <MovieCard
                        key={movie.id}
                        img={putImage(movie.poster_path)}
                        title={movie.title ? movie.title : movie.name}
                        rate={movie.vote_average}
                      />
                    </NavLink>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ) : (
        <AntLoading />
      )}
    </>
  );
}
