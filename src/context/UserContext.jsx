import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { apiKey, baseURL } from "../components/config";

export const UserContext = createContext({ user: {}, session: "" });
export default function UserProvider({ children }) {
  const [user, setUser] = useState({});
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [session, setSession] = useState(() => localStorage.getItem("session"));
  const navigate = useNavigate();
  const location = useLocation()
  async function getUserData() {
    const { data } = await axios.get(
      `${baseURL}/account?api_key=${apiKey}&session_id=${session}`
    );
    fetchFavoriteMovies(data.id);

    // console.log(data)
    setUser(data);
  }
  async function fetchFavoriteMovies(id = user.id) {
    const favResult = await axios.get(
      `${baseURL}/account/${id}/favorite/movies?api_key=${apiKey}&session_id=${session}`
    );
    setFavoriteMovies(favResult.data.results);
  }
  console.log(favoriteMovies);

  useEffect(() => {
    if (session) {
      localStorage.setItem("session", session);
      getUserData();
    }
    if(location.pathname==="/login"){
      navigate("/profile", {
        replace: true,
      });
    }
  }, [session]);

  function logout() {
    setUser({});
    setSession("");
    localStorage.clear();
  }

  async function login(username, password) {
    try {
      const tokenResult = await axios.get(
        `${baseURL}/authentication/token/new?api_key=${apiKey}`
      );
      const authorize = await axios.post(
        `${baseURL}/authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username,
          password,
          request_token: tokenResult.data.request_token,
        }
      );
      const session = await axios.post(
        `${baseURL}/authentication/session/new?api_key=${apiKey}`,
        {
          request_token: tokenResult.data.request_token,
        }
      );
      setSession(session.data.session_id);
    } catch {
      toast.error("Invalid username and password!");
    }
  }
  return (
    <UserContext.Provider
      value={{
        user,
        login,
        session,
        logout,
        favoriteMovies,
        fetchFavoriteMovies,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
