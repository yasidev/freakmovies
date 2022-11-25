import React from "react";
import { Link, NavLink } from "react-router-dom";
import { imgLoader } from "../Helpers/img";

export default function PeopleSearch({ item }) {
  return (
    <NavLink to={`/people/${item.id}`}>
      <div className="flex gap-4 my-2">
        <img
          className="w-12 h-12 object-cover"
          src={
            item.profile_path
              ? imgLoader(item.profile_path, "w45")
              : "/avatar.jpg"
          }
        />
        <p>{item.name}</p>
      </div>
    </NavLink>
  );
}
