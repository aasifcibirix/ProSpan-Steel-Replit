import React from "react";
import styled from "styled-components";
import { BaseButton } from "../Section";

const WhiteOutlineBtn = styled(BaseButton)`		
	background-color:transparent;
    color: #fff;
    border-color: #fff;
	& .icon{
		> svg{
			fill:#fff;
		}
	}
	&:after, &:before{
		background: #fff;
	}
	&:hover{		
		color: #2B2B2B;
		 border-color: #fff;
		& .icon{
			> svg{
				fill:#2B2B2B;
			}
		}
	}
`;

const WhiteOutlineButton = (props) => {
	const { icon, iconAfter, text, size } = props;
	return (
		<WhiteOutlineBtn className={`btn ${size ? `btn-${size}` : ''} `}>
			{iconAfter ? (
				<>
					{text && <span className='text'>{text}</span>}
					{iconAfter && <span className='icon'>{iconAfter}</span>}
				</>
			) : (
				<>
					{icon && <span className='icon'>{icon}</span>}
					{text && <span className='text'>{text}</span>}
				</>
			)
			}
		</WhiteOutlineBtn>
	)
};


export default WhiteOutlineButton;

