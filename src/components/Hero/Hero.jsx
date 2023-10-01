import React from "react";
import "./Hero.css";
import CountUp from "react-countup";
import SearchBar from "../SearchBar/SearchBar";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-container container">
        <div className="left-side">
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            Discover
            <br></br> Most Suitable <br></br>Property
          </motion.h1>
          <div className="text">
            <p>Find a variety of properties that suit you very easilty</p>
            <p>Forget all difficulties in finding a residence for you</p>
          </div>
          <SearchBar />
          <div className="statistics">
            <div className="statistic">
              <span className="number">
                <CountUp start={8800} end={9000} duration={3}></CountUp>
                <span style={{ color: "orange" }}>+</span>
              </span>
              <span className="text">Premium Product</span>
            </div>
            <div className="statistic">
              <span className="number">
                <CountUp start={1900} end={2000} duration={3}></CountUp>
                <span style={{ color: "orange" }}>+</span>
              </span>
              <span className="text">Happy Customer</span>
            </div>
            <div className="statistic">
              <span className="number">
                <CountUp start={15} end={28} duration={4}></CountUp>
                <span style={{ color: "orange" }}>+</span>
              </span>
              <span className="text">Awards Winning</span>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ x: "7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="right-side"
        >
          <img src="./imgs/hero-image.png" alt=""></img>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
