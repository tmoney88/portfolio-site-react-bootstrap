import React, { Component } from "react";

class Carousel extends Component {
  state = {
    items: [
      {
        id: 0,
        title: "title0",
        subTitle: "subTitle0",
        imgSrc: "imgSrc0",
        link: "link0",
        selected: false,
      },
      {
        id: 1,
        title: "title1",
        subTitle: "subTitle1",
        imgSrc: "imgSrc1",
        link: "link1",
        selected: false,
      },
      {
        id: 2,
        title: "title2",
        subTitle: "subTitle2",
        imgSrc: "imgSrc2",
        link: "link2",
        selected: false,
      },
    ],
  };
  render() {
    return <div>Carousel Component works</div>;
  }
}

export default Carousel;
