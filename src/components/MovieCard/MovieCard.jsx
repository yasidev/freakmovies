import React from "react";
import { putImage } from "../config";

export default function MovieCard({ img, title, rate }) {
  return (
    <div className="flex flex-col aspect-[2/3] relative rounded hover:scale-150 duration-150 rounded-md shadow-lg shadow-[#bc5050] hover:shadow-none">
      <img src={img} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 flex flex-col justify-end p-4 w-full bg-gradient-to-b from-[#00000045] to-[#000000a4]">
        <h3 className="text-base text-white">{title}</h3>
        <span>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <span className="text-base text-white">{rate}</span>
        </span>
      </div>
    </div>
  );
}
