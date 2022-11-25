import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey, baseURL, putImage } from "./config";

export default function PeopleID() {
  const [people, setPeople] = useState([]);
  const { id } = useParams();

  async function getPeople() {
    const { data } = await axios.get(
      `${baseURL}/person/${id}?api_key=${apiKey}`
    );
    setPeople(data);
    console.log(data);
  }

  useEffect(() => {
    getPeople();
  }, [id]);

  return (
    <div>
      <div className=" ml-10 flex p-4">
        <img src={putImage(people.profile_path, "w300")} />
        <div className="flex flex-col p-4">
        <span className="text-2xl text-rose-400">{people.name}</span>
        <br/>
        <h2 className="text-white">{people.biography}</h2>
        <h1 className="text-xl text-rose-400 mt-8">Birthday : {people.birthday}</h1>
        </div>
      </div>
    </div>
  );
}
