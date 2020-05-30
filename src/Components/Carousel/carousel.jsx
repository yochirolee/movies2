import React, { Fragment,useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import CardResult from "../Card/card";
import "./Carousel.css";
import { CarouselItem } from "react-bootstrap";
import "../Card/Card.css";

export default function ControlledCarousel(props) {
  console.log("carousel Properties",props);
  const [index, setIndex] = useState(0);
  const movies = props.movies;
  let carouselItemsCount = 0;
  let Items = [];

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const Factory = () => {
    if(movies){
    let init = 0;
    let end = 8;
    carouselItemsCount = Math.ceil(movies.length / 8);

    while (carouselItemsCount > 0) {
      Items.push(movies.slice(init, end));
      init += 8;
      end += 8;
      carouselItemsCount--;
    }}
  };

  return (
    Factory(),
    (
      <Fragment>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {Items.map((movieList, index) => (
          <CarouselItem>
            <CardResult movieList={movieList} key={index} />
          </CarouselItem>
        ))}
      </Carousel>
      </Fragment>
    )
  );
}
