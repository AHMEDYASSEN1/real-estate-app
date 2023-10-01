import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BiSolidMessageAlt } from "react-icons/bi";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="c-wrapper">
      <div className="c-container container">
        <div className="left-side">
          <div className="info">
            <span>Our Contact Us</span>
            <h3>Easy to contact us</h3>
            <p>
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>
          </div>
          <div className="contact-cards">
            <div className="card one">
              <div className="c-info">
                <div className="icon">
                  <MdCall size={20} />
                </div>
                <div className="c-number">
                  <span>Call</span>
                  <span>021 123 145 14</span>
                </div>
              </div>
              <div className="c-button">
                <button>Call now</button>
              </div>
            </div>
            <div className="card two">
              <div className="c-info">
                <div className="icon">
                  <BsFillChatDotsFill size={20} />
                </div>
                <div className="c-number">
                  <span>Chat</span>
                  <span>021 123 145 14</span>
                </div>
              </div>
              <div className="c-button">
                <button>Chat now</button>
              </div>
            </div>
            <div className="card three">
              <div className="c-info">
                <div className="icon">
                  <BsFillChatDotsFill size={20} />
                </div>
                <div className="c-number">
                  <span>Video Call</span>
                  <span>021 123 145 14</span>
                </div>
              </div>
              <div className="c-button">
                <button>Video Call now</button>
              </div>
            </div>
            <div className="card four">
              <div className="c-info">
                <div className="icon">
                  <BiSolidMessageAlt size={20} />
                </div>
                <div className="c-number">
                  <span>Message</span>
                  <span>021 123 145 14</span>
                </div>
              </div>
              <div className="c-button">
                <button>Message now</button>
              </div>
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
          <img src="./imgs/contact.jpg" alt=""></img>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
