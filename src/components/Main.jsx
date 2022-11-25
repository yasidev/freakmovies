import React from "react";

import NavBar from "./NavBar";
import SliderMain from "./SliderMain";
import SlideShow from "./SlideShow";
import TopRated from "./TopRated";


export default function Main() {
  return (
    <>
      <NavBar />
      <SlideShow />
      <SliderMain />
      <TopRated />
    </>
  );
}
