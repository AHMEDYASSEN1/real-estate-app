import React, { useState } from "react";
import "./Property.css";
import { useLocation, useParams } from "react-router-dom";
import data from "../../utils/slider.json";
import { type } from "@testing-library/user-event/dist/type";
import { curryRight, property } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faSquareParking,
  faPersonBooth,
} from "@fortawesome/free-solid-svg-icons";

const Property = () => {
  const { porpertyId } = useParams();
  const id = +porpertyId;

  let currItem = null;

  data.forEach(function (item) {
    if (item.id === id) {
      currItem = item;
    }
  });

  return (
    <div className="p-wrapper container">
      <div className="image">
        <img src={currItem.image}></img>
      </div>
      <div className="details">
        <div className="p-info">
          <div className="info">
            <div className="title">
              <h2>{currItem.title} </h2>
              <span>$ {currItem.price}</span>
            </div>
            <div className="comp">
              {/* add your icons */}
              <span>
                <FontAwesomeIcon icon={faBath} />{" "}
                {currItem.facilities.bathrooms} Bathrooms
              </span>
              <span>
                <FontAwesomeIcon icon={faSquareParking} />{" "}
                {currItem.facilities.parking} Parking
              </span>
              <span>
                <FontAwesomeIcon icon={faPersonBooth} />{" "}
                {currItem.facilities.bedrooms} Rooms/s
              </span>
            </div>
            <div className="text">
              <p>{currItem.description}</p>
            </div>
            <div className="location">
              <span>
                {currItem.address}
                {currItem.city}
                {currItem.country}
              </span>
            </div>
            <button>Book your visit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
