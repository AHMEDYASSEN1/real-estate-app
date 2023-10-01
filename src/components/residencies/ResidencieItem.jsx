import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { truncate } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import "./ResidencieItem.css";

const ResidencieItem = (props) => {

  const navigate = useNavigate();


  const onClickHandler = () => {
    navigate(`../properties/${props.item.id}`)
  }
  return (
    <div
      className="residencieItem"
      onClick={onClickHandler}
    >
      <AiFillHeart size={24} />
      <img src={props.item.image} alt="city"></img>
      <div className="info">
        <span>{`$${props.item.price}`}</span>
        <h3>{truncate(props.item.title, { length: 17 })}</h3>
        <p>{truncate(props.item.description, { length: 80 })}</p>
        <button>details</button>
      </div>
    </div>
  );
};

export default ResidencieItem;
