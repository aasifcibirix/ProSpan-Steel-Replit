import React, { useState } from "react";
import {
  Accordions,
  Accordionsitems,
  AccordionsContent,
  AccordionsContentinner,
  AccordionsTitle,
} from "src/components/CustomizationAddon/style";
import { PointerDownIcon, DurabilityIcon } from "src/components/Icons";

const packageData = [
  {    
    title: "Size",
    question: "From 40x40 red iron buildings to extensive 100x60 and larger structures, you’ll be able to find a configuration that fits your desired application.",
    answer: "<ul><li><strong>Gable Roofs</strong> <p>This roofing option features two sides with a raised roof pitch and overhanging awnings. It's a go-to choice for a wide range of projects and is an excellent way to divert rain and sn ow.</p></li><li><strong>Single-Slope Roofs</strong> <p>Also known as a mono-slope roof, this type of roofing features a single surface and is ideal for agricultural projects and lean-to additions.</p></li><li><strong>Gambrel Roofs</strong> <p>This is your quintessential barn roof. It features four roof faces and is a solid choice for any  farming application.</p></li><li><strong>Monitor Roofs</strong> <p>A monitor roof features a raised center section that offers additional square footage and is often outfitted with vents or windows.</p></li></ul>",
  },
  {    
    title: "Roofing System",
    question: "You’ll be able to choose between several roofing types, including:",
    answer: "<ul><li><strong>Gable Roofs</strong> <p>This roofing option features two sides with a raised roof pitch and overhanging awnings. It's a go-to choice for a wide range of projects and is an excellent way to divert rain and sn ow.</p></li><li><strong>Single-Slope Roofs</strong> <p>Also known as a mono-slope roof, this type of roofing features a single surface and is ideal for agricultural projects and lean-to additions.</p></li><li><strong>Gambrel Roofs</strong> <p>This is your quintessential barn roof. It features four roof faces and is a solid choice for any  farming application.</p></li><li><strong>Monitor Roofs</strong> <p>A monitor roof features a raised center section that offers additional square footage and is often outfitted with vents or windows.</p></li></ul>",
  },
  {    
    title: "Trim and Flashing",
    question: "These components are typically used around windows, doors, corners, and along the roofline to  seal joints and edges of your structure.",
    answer: "<ul><li><strong>Gable Roofs</strong> <p>This roofing option features two sides with a raised roof pitch and overhanging awnings. It's a go-to choice for a wide range of projects and is an excellent way to divert rain and sn ow.</p></li><li><strong>Single-Slope Roofs</strong> <p>Also known as a mono-slope roof, this type of roofing features a single surface and is ideal for agricultural projects and lean-to additions.</p></li><li><strong>Gambrel Roofs</strong> <p>This is your quintessential barn roof. It features four roof faces and is a solid choice for any  farming application.</p></li><li><strong>Monitor Roofs</strong> <p>A monitor roof features a raised center section that offers additional square footage and is often outfitted with vents or windows.</p></li></ul>",
  },
  {    
    title: "Windows and Doors",
    question: "Add roll-up garage doors of different sizes, walk-in doors, and windows for light and airflow.",
    answer: "<ul><li><strong>Gable Roofs</strong> <p>This roofing option features two sides with a raised roof pitch and overhanging awnings. It's a go-to choice for a wide range of projects and is an excellent way to divert rain and sn ow.</p></li><li><strong>Single-Slope Roofs</strong> <p>Also known as a mono-slope roof, this type of roofing features a single surface and is ideal for agricultural projects and lean-to additions.</p></li><li><strong>Gambrel Roofs</strong> <p>This is your quintessential barn roof. It features four roof faces and is a solid choice for any  farming application.</p></li><li><strong>Monitor Roofs</strong> <p>A monitor roof features a raised center section that offers additional square footage and is often outfitted with vents or windows.</p></li></ul>",
  },
  {    
    title: "Insulation",
    question: "You can add insulation to your structure to reduce moisture and regulate interior temperatures.",
    answer: "<ul><li><strong>Gable Roofs</strong> <p>This roofing option features two sides with a raised roof pitch and overhanging awnings. It's a go-to choice for a wide range of projects and is an excellent way to divert rain and sn ow.</p></li><li><strong>Single-Slope Roofs</strong> <p>Also known as a mono-slope roof, this type of roofing features a single surface and is ideal for agricultural projects and lean-to additions.</p></li><li><strong>Gambrel Roofs</strong> <p>This is your quintessential barn roof. It features four roof faces and is a solid choice for any  farming application.</p></li><li><strong>Monitor Roofs</strong> <p>A monitor roof features a raised center section that offers additional square footage and is often outfitted with vents or windows.</p></li></ul>",
  },
  {    
    title: "Gutter Systems",
    question: "Tack on gutters and downspouts to help your structure shed and divert rain.",
    answer: "<ul><li><strong>Gable Roofs</strong> <p>This roofing option features two sides with a raised roof pitch and overhanging awnings. It's a go-to choice for a wide range of projects and is an excellent way to divert rain and sn ow.</p></li><li><strong>Single-Slope Roofs</strong> <p>Also known as a mono-slope roof, this type of roofing features a single surface and is ideal for agricultural projects and lean-to additions.</p></li><li><strong>Gambrel Roofs</strong> <p>This is your quintessential barn roof. It features four roof faces and is a solid choice for any  farming application.</p></li><li><strong>Monitor Roofs</strong> <p>A monitor roof features a raised center section that offers additional square footage and is often outfitted with vents or windows.</p></li></ul>",
  },
  {    
    title: "Ventilation",
    question: "Give yourself some fresh air with a wide range of passive and active ventilation systems.",
    answer: "<ul><li><strong>Gable Roofs</strong> <p>This roofing option features two sides with a raised roof pitch and overhanging awnings. It's a go-to choice for a wide range of projects and is an excellent way to divert rain and sn ow.</p></li><li><strong>Single-Slope Roofs</strong> <p>Also known as a mono-slope roof, this type of roofing features a single surface and is ideal for agricultural projects and lean-to additions.</p></li><li><strong>Gambrel Roofs</strong> <p>This is your quintessential barn roof. It features four roof faces and is a solid choice for any  farming application.</p></li><li><strong>Monitor Roofs</strong> <p>A monitor roof features a raised center section that offers additional square footage and is often outfitted with vents or windows.</p></li></ul>",
  },
];

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const handleAccodion = (key) => {
    if (activeAccordion === key) {
      return setActiveAccordion(null);
    }
    setActiveAccordion(key);
  };
  return (
    <Accordions className="accordions">
      {packageData.map((item, index) => (
        <Accordionsitems
          className={`accordions-items ${activeAccordion === index ? "active" : ""}`}
          key={index}
        >
          <AccordionsTitle
            className="accordions-title"
            onClick={() => handleAccodion(index)}
          >
            <span className="text">
              <i><DurabilityIcon /></i>
              <strong>{item.title}</strong>
              <p>{item.question}</p>
            </span>
            <span className="icon"><PointerDownIcon /> </span>
          </AccordionsTitle>
          <AccordionsContent className="accordions-content">
            <AccordionsContentinner
              dangerouslySetInnerHTML={{ __html: item.answer }}
            />
          </AccordionsContent>
        </Accordionsitems>
      ))}
    </Accordions>
  );
};

export default Accordion;
