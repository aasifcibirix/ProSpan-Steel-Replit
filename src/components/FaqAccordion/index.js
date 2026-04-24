import React, { useState } from "react";
import {
  Accordions,
  Accordionsitems,
  AccordionsContent,
  AccordionsContentinner,
  AccordionsTitle,
} from "../Accordion";
import { PointerDownIcon } from "../Icons";

const faqData = [
  {
    question: "What is a red iron agricultural building? ",
    answer: "A red iron agricultural building is a structure built using reinforced steel beams that are coated in a layer of protective iron oxide. They're a great option for agriculture due to their immense available square footage, long lifespan, and affordable design.",
  },
  {
    question: "What sizes are available for red iron buildings?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
  },
  {
    question: "Are red iron buildings customizable for specific farm uses?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
  },
  {
    question: "How do agricultural metal buildings compare to traditional pole barns?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
  },
  {
    question: "How long does it take to install a red iron agricultural building? ",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  }
];

const FaqAccordionStatic = ({ faqs }) => {
  const [activeFaq, setActiveFaq] = useState(0);
  const handleAccodion = (key) => {
    if (activeFaq === key) {
      return setActiveFaq(null);
    }
    setActiveFaq(key);
  };
  return (
    <Accordions className="accordions">
      {faqData.map((faq, index) => (
        <Accordionsitems
          className={`accordions-items ${activeFaq === index ? "active" : ""}`}
          key={index}
        >
          <AccordionsTitle
            className="accordions-title"
            onClick={() => handleAccodion(index)}
          >
            <strong>{faq.question}</strong>
            <span><PointerDownIcon /> </span>
          </AccordionsTitle>
          <AccordionsContent className="accordions-content">
            <AccordionsContentinner>
              <p>{faq.answer}</p>
            </AccordionsContentinner>
          </AccordionsContent>
        </Accordionsitems>
      ))}
    </Accordions>
  );
};

export default FaqAccordionStatic;
