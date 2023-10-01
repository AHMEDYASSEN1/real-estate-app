import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div className="search">
      <FontAwesomeIcon icon={faLocationDot} className="icon" />
      <input placeholder="Search..." type="text"></input>
      <button type="submit">Search</button>
    </div>
  );
};

export default SearchBar;
