import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
import { Autoplay, Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { apiKey, baseImgURL, baseURL, putImage, youTubeURL } from "./config";
import AntLoading from "./Loading/AntLoading";
import NavBar from "./NavBar";
import toast from "react-hot-toast";


export default function Movie() {
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const { user, session, favoriteMovies, fetchFavoriteMovies } =
    useContext(UserContext);
  useEffect(() => {
    if (movie && favoriteMovies.length) {
      const favMovie = favoriteMovies.find((f) => f.id === movie?.id);
      setIsFavorite(Boolean(favMovie));
      console.log(favMovie);
    }
  }, [movie, favoriteMovies]);

  async function handleFavorite() {
    if (session) {
      await axios.post(
        `${baseURL}/account/${user.id}/favorite?api_key=${apiKey}&session_id=${session}`,
        {
          media_type: "movie",
          media_id: movie.id,
          favorite: !isFavorite,
        }
      );
      fetchFavoriteMovies();
      toast.success(
        `${movie.title} ${isFavorite ? "removed" : "added"} to your favorites.`
      );
    } else {
      toast.error("Please login!");
    }
  }

  async function getMovie() {
    try {
      const { data } = await axios.get(
        `${baseURL}/movie/${id}?api_key=e53bab22614cda1579762df1ee0a0c4b&append_to_response=videos,images`
      );
      setMovie(data);
    } catch {
      console.log("invalid something");
    }
  }

  useEffect(() => {
    getMovie();
  }, [id]);
  return (
    <>
      <NavBar />
      {movie ? (
        <>
          <div
            className={`bg-cover h-[400px]`}
            style={{
              backgroundImage: `url(${baseImgURL}/original/${movie.backdrop_path})`,
              backgroundSize: "cover",
            }}
          >
            <div className="flex items-center w-full h-full bg-gradient-to-b from-[#000000c7] to-[#000000c7]">
              <div className=" ml-10 flex">
                <img src={putImage(movie.poster_path, "w500")} />
              </div>
              <div className="flex flex-col gap-5 ml-3 p-2">
                <h2 className="text-slate-400 text-3xl">{movie.title}</h2>
                <p className="text-slate-400 text-lg">{movie.overview}</p>
                <span className="text-2xl text-slate-400">
                  Rate:
                  <span>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                  </span>
                  {movie.vote_average}
                </span>

                <div className="flex text-yellow-400 gap-8 mt-10 mb-10">
                  <button
                    className="flex gap-2 items-center"
                    onClick={handleFavorite}
                  >
                    <span className="border border-yellow-400 rounded-full p-2">
                      {isFavorite ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                      )}
                    </span>
                    <span>
                      {isFavorite ? "Remove from" : "Add to"} Favorites
                    </span>
                  </button>
                  <button className="flex gap-2 items-center">
                    <span className="border border-yellow-400 rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-share"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>
                    </span>
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8">
            <Swiper
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
                1536: {
                  slidesPerView: 4,
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
              {movie.videos.results.map((video) => {
                return (
                  <SwiperSlide>
                    <iframe
                      className="w-full h-[2/1]"
                      src={`${youTubeURL}/${video.key}`}
                    ></iframe>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </>
      ) : (
        <AntLoading />
      )}
    </>
  );
}
