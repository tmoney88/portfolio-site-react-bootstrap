import React from "react";
import Hero from "../components/Hero";

function HomePage({ title, subTitle, text }) {
  return (
    <div>
      <Hero title={title} subTitle={subTitle} text={text} />
    </div>
  );
}

export default HomePage;
