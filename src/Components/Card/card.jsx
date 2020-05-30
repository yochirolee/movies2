import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Card.css";
import Carousel from "react-bootstrap/Carousel";

export default function CardResult(props) {

  const imageUrl = `https://image.tmdb.org/t/p/w220_and_h330_face/`;

  const HandleOnclick=(movie)=>{
    alert(movie.id);
  }
  return (

      <div className="row row-ylee" >
        {props.movieList.map((movie, index) => (
          <div className="col-md-1 mr-5 col-sx-12 " key={index} onClick={()=>HandleOnclick(movie)} >
            <Card style={{ width: "10rem" }}>
              <Card.Img variant="top" src={imageUrl + movie.poster_path} />
              <Card.Body>
               
            
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
   
  );
}
