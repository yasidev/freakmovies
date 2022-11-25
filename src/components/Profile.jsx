import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { baseImgURL } from "./config";

export default function Profile() {
  const { user, session, favoriteMovies } = useContext(UserContext);
  return session ? (
    <div className="ml-8 mb-24">
      <h1 className="text-white text-3xl mt-14 mb-8">Profile Page</h1>
      <div className="flex items-center gap-10">
        <img
          src={`${baseImgURL}/w185/${user?.avatar?.tmdb?.avatar_path}`}
          onError={(e) => {
            (e.target.src = "profile-picture.webp"), (e.onError = null);
          }}
          className="rounded-full w-[200px] h-[200px]"
        />
        <h2 className="text-2xl text-teal-700">{user.name || user.username}</h2>
      </div>
      <div className="mt-9">
        <h2 className="text-rose-900 text-2xl font-medium mb-4">
          My Favorites
        </h2>
        {favoriteMovies ? (
          <div className="">
            {favoriteMovies.map((movie) => {
              return (
                <div className="flex border border-slate-700 w-2/3 rounded mb-4 gap-6">
                  <img src={`${baseImgURL}/w300/${movie.backdrop_path}`} />
                  <div>
                    <h2 className="text-white text-xl mt-2">{movie.title} <span className="text-base text-slate-500">{movie.release_date.split('-')[0]}</span></h2>
                    <span className="text-lg text-slate-400">
                      Rate:
                      <span>
                        <i className="fa-solid fa-star text-yellow-400"></i>
                      </span>
                      {movie.vote_average}
                    </span>
                    
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "My Favorite is Empty"
        )}
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
