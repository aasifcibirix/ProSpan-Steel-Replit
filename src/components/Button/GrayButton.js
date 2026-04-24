import React from "react";
import styled from "styled-components";
import { BaseButton } from "../Section";

const GrayBtn = styled(BaseButton)`
  background: rgba(246, 246, 246, 0.10);
	border-color:#2B2B2B;
	color:#fff;	
	& .icon{
		> svg{
			fill:#fff;
		}
	}
	&:after, &:before{
		background: #F32435;
	}
	&:hover{		
	color: #fff;	
    border-color:#F32435;
		& .icon{
			> svg{
				fill:#fff;
			}
		}
	}
`;

const GrayButton = (props) => {
  const { icon, iconAfter, text, size, ...others } = props;
  return (
    <GrayBtn className={`btn ${size ? `btn-${size}` : ""} `} {...others}>
      {iconAfter ? (
        <>
          {text && <span className="text">{text}</span>}
          {iconAfter && <span className="icon">{iconAfter}</span>}
        </>
      ) : (
        <>
          {icon && <span className="icon">{icon}</span>}
          {text && <span className="text">{text}</span>}
        </>
      )}
    </GrayBtn>
  );
};

export default GrayButton;
