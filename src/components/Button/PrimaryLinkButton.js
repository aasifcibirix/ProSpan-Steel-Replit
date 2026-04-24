import React from "react";
import styled from "styled-components";
import { BaseButton } from "../Section";

const PrimaryLinkBtn = styled(BaseButton)`
  background-color:transparent;
  border-color:transparent;
	color:#E9242A;
  box-shadow: none !important;
	& .icon{
    > svg{
      fill:#E9242A;
		}
	}
	&:hover{		
    color:#373636;
		& .icon{
			> svg{
				fill:#373636;
			}
		}
	}
`;
const PrimaryLinkButton = (props) => {
  const { icon, iconAfter, text, size, ...others } = props;
  return (
    <PrimaryLinkBtn className={`btn ${size ? `btn-${size}` : ""} `} {...others}>
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
    </PrimaryLinkBtn>
  );
};

export default PrimaryLinkButton;
