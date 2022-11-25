import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import UserProvider from "./context/UserContext";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Movie from "./components/Movie";
import People from "./components/People";
import PeopleID from "./components/PeopleID";
import TvShow from "./components/TvShow";
import Login from "./components/Login";
import Profile from "./components/Profile";
import TvShowId from "./components/TvShowId";

export const router = createBrowserRouter([
  {
    element: (
      <UserProvider>
        <App />
      </UserProvider>
    ),
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/tvShow",
        element: <TvShow />,
      },
      {
        path: "/tvShow/:id",
        element: <TvShowId />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/people/:id",
        element: <PeopleID />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
