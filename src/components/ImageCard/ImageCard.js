import React from "react";
import "./card.css";

const ImageCard = (props) => (
  <div className="card">
    <div className="row">
    <div className="img-container col-md-4">
      <img className="pic" alt={props.name} src={props.image} id={props.index} onClick={props.handleClick} height= "200px" width="200px"/>
    </div>
    </div>
  </div>
);

export default ImageCard;

