import React from "react";
import { NavLink } from "react-router-dom";
import { imgLoader } from "../Helpers/img";

export default function TvSearch({ item }) {
  return (
    <NavLink to={`/tvShow/${item.id}`}>
      <div className="flex gap-4 my-2">
        <img
          className="w-12 h-12 object-cover"
          src={
            item.poster_path ? imgLoader(item.poster_path, "w92") : "/tv.png"
          }
        />
        <p>{item.name}</p>
      </div>
    </NavLink>
  );
}
