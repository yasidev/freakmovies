import "antd/dist/antd.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet} from "react-router-dom";
import MovieCard from "./components/MovieCard/MovieCard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
      <Toaster/>
    </>
  );
}

export default App;
