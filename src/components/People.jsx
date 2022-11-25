import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { apiKey, baseImgURL, baseURL } from "./config";

import NavBar from "./NavBar";

export default function People() {
  const [people, setPeople] = useState([]);

  async function getPeople() {
    try {
      const { data } = await axios.get(
        `${baseURL}/person/popular?api_key=${apiKey}&page=1`
      );
      console.log(data.results);
      setPeople(data.results);
    } catch {
      console.log("Gozashtim");
    }
  }

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <NavBar />
      <div className="grid gap-x-8 gap-y-4 grid-cols-4 w-11/12 mx-auto p-4">
        {people.map((person) => {
          return (
            <div className="flex h-44 gap-4 bg-gray-800 rounded-lg">
              <img className="rounded-lg" src={`${baseImgURL}/w780/${person.profile_path}`} />
              <p className="text-rose-600 text-base">{person.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
