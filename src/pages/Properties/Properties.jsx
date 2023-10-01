import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ResidencieItem from "../../components/residencies/ResidencieItem";
import data from "../../utils/slider.json";
import "./Properties.css";

const Properties = () => {
  return (
    <div className="p-wrapper">
      <div className="p-container container">
        <div className="searchBar">
          <SearchBar />
        </div>
        <div className="p-items">
          {data.map((item, idx) => (
            <div key={idx}>
              <ResidencieItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
