import React from "react";
import "./Card.css";

const Cards = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} id={props.id} onClick={() => props.imageClicked(props.id)}/>
    </div>
  </div>
);

export default Cards;
