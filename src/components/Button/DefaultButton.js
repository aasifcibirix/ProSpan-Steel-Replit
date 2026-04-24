import React from "react";
import styled from "styled-components";
import { BaseButton } from "../Section";

const DefaultBtn = styled(BaseButton)`
  background: #212324;
	border-color:#000;
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

const DefaultButton = (props) => {
  const { icon, iconAfter, text, size, ...others } = props;
  return (
    <DefaultBtn className={`btn ${size ? `btn-${size}` : ""} `} {...others}>
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
    </DefaultBtn>
  );
};

export default DefaultButton;
