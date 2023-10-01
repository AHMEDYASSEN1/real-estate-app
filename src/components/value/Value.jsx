import { useState } from "react";
import "./Value.css";
import data from "../../utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { motion } from "framer-motion";


const Value = () => {
  const [className, setClassName] = useState(null);

  console.log(className);
  return (
    <div className="v-wrapper">
      <div className="v-container container">
        <motion.div
          initial={{ x: "-7rem", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="left-side"
        >
          <img src="./imgs/value.png" alt=""></img>
        </motion.div>
        <div className="right-side">
          <div className="info">
            <span>Our Value</span>
            <h3>Value We Give to You</h3>
            <div className="text">
              <p>
                We always ready to help by providijng the best services for you.
              </p>
              <p>We beleive a good blace to live can make your life better</p>
            </div>
          </div>
          <div className="cards">
            <Accordion
              className="accordion"
              allowMultipleExpanded={false}
              preExpanded={[0]}
            >
              {data.map((item, idx) => {
                return (
                  <AccordionItem
                    key={idx}
                    uuid={idx}
                    className={`accordionItem ${className}`}
                  >
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("expanded")
                          : setClassName("collapsed")
                      }
                    </AccordionItemState>
                    <AccordionItemHeading>
                      <AccordionItemButton className="acc-button">
                        <div className="icon">{item.icon}</div>
                        <span className="c-heading">{item.heading}</span>
                        <div className="icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="acc-text">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
