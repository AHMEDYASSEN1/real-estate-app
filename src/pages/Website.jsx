import React from "react";
import Hero from "../components/Hero/Hero";
import Companies from "../components/companies/Companies";
import Residencies from "../components/residencies/Residencies";
import Value from "../components/value/Value";
import Contact from "../components/contact/Contact";
import GetStarted from "../components/getStarted/GetStarted";

const Website = () => {
  return (
    <div className="app">
      <Hero />
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
};

export default Website;
