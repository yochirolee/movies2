import React from "react";
import { Card } from "react-bootstrap";
import "./ResultCard.css";
import NotFound from "./notfound.png"
export default function CardSearchResult(props) {

  const imageUrl = `https://image.tmdb.org/t/p/w220_and_h330_face/`;

  const HandleOnclick=(movie)=>{
    alert(movie.id);
  }
  return (
       
       (props.movies ) ? ( 
            
       <div className="row row-ylee" >
        <div className="results col-12"><h3>Results</h3></div>
        {props.movies.map((movie, index) => (
          <div className="col-1  mr-2 ml-2" key={index} onClick={(e)=>HandleOnclick(movie)} >
            <Card style={{ width: "6rem" }}>
              <Card.Img variant="top" src={movie.poster_path ? (imageUrl + movie.poster_path):(NotFound)} />
              <Card.Body>
                <p className="movie-title-searched">{movie.original_title.lenght<25 ? movie.original_title:movie.original_title.slice(0,25)}</p>
              
            
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
       ):(<div></div>)
   
  );
}
