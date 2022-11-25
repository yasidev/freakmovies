import React from "react";
import { baseImgURL, putImage } from "../config";

export default function SlideshowCard({ item }) {
  return (
    <div
      className={`bg-cover h-[500px]`}
      style={{
        backgroundImage: `url(${baseImgURL}/original/${item.backdrop_path})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-end w-full h-full bg-gradient-to-b from-[#00000044] to-[#000000e4]">
        <div className="flex flex-col justify-center    gap-5 ml-3 mb-8">
          <h2 className="text-slate-400 text-3xl">{item.title}</h2>
          <p className="text-slate-400 text-lg">{item.overview}</p>
          <span className="text-2xl text-slate-400">
            Rate:
            <span>
              <i className="fa-solid fa-star text-yellow-400"></i>
            </span>
            {item.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}
