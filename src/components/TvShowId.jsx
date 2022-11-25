import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseURL, putImage } from "./config";

export default function PeopleID() {
  const [people, setPeople] = useState([]);
  const { id } = useParams();

  async function getPeople() {
    const { data } = await axios.get(`${baseURL}/tv/${id}?api_key=${apiKey}`);
    setPeople(data);
    console.log(data);
  }

  useEffect(() => {
    getPeople();
  }, [id]);

  return (
    <div>
      <div className=" ml-10 flex p-4">
        <img src={putImage(people.backdrop_path, "w780")} />
        <div className="flex flex-col p-4">
          <span className="text-2xl text-rose-400">{people.original_name}</span>
          <br />
          <h1 className="text-xl text-rose-400 mt-8">
            Overview : {people.overview}
          </h1>
        </div>
      </div>
    </div>
  );
}
