import React, { useEffect, useState } from "react";
import "swiper/css";
import "../styleswiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { apiKey, baseImgURL, baseURL, putImage } from "./config";
import { Autoplay, Navigation } from "swiper";
import { NavLink } from "react-router-dom";
import MovieCard from "./MovieCard/MovieCard";
import { Segmented } from "antd";
import AntLoading from "./Loading/AntLoading";

export default function TopRated() {
  const [movies, setMovies] = useState([]);
  const [segmentValue, setSegmentValue] = useState("Movie");

  const [bg, setBg] = useState();

  async function topMovies() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=e53bab22614cda1579762df1ee0a0c4b`
    );
    setMovies(data.results);
  }
  async function topTvs() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=e53bab22614cda1579762df1ee0a0c4b&page=1`
    );
    setMovies(data.results);
  }

  useEffect(() => {
    if (segmentValue === "Movie") {
      topMovies();
    } else {
      topTvs();
    }
  }, [segmentValue]);
  return (
    <>
      <div className="flex gap-10 items-center mt-16 bg-slate-700">
        <h2 className="text-2xl text-rose-700 ml-5 py-4">Top Rated Shows</h2>
        <Segmented
          onChange={setSegmentValue}
          value={segmentValue}
          options={["Movie", "TV"]}
        />
      </div>
      {movies ? (
        <div
          style={{
            backgroundImage: `url(${baseImgURL}/original/${bg})`,
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
                    onMouseOver={() => setBg(movie.backdrop_path)}
                    className="overflow-visible"
                    key={movie.id}
                  >
                    <NavLink to={`/movie/${movie.id}`}>
                      <MovieCard
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
