import React, {
  Component
} from "react";
import "../styles/FrontEndMyWork.scss";

const FrontEndMyWork = props => {
  const data = props.data;

  return data.map(item => 
    ( 
    <div key = {item.title} className = "FrontEndMyWork" >
    <div className = "FrontEndMyWorkImg" >
    <img src = {item.img} alt = {item.title}/> 
    </div> 
    <h3 > {item.title} </h3> 
    <p> {item.technology} </p> 
    <a href = {item.adressCode}
    target = "_blank"
    rel = "noopener noreferrer" >
    kod
    </a>
    <a href = {item.adressView}
    target = "_blank"
    rel = "noopener noreferrer" >
    wizualizacja 
    </a>
</div>
  ));
};

export default FrontEndMyWork;