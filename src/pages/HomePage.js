import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage({ title, subTitle, text }) {
  return (
    <div>
      <Hero title={title} subTitle={subTitle} text={text} />
      <Carousel />
    </div>
  );
}

export default HomePage;
