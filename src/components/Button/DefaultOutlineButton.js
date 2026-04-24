import React from "react";
import styled from "styled-components";
import { BaseButton } from "../Section";

const DefaultOutlineBtn = styled(BaseButton)`		
	background-color:transparent;
    color: #2B2B2B;
    border-color:#2B2B2B;
	& .icon{
		> svg{
			fill:#2B2B2B;
		}
	}
	&:after, &:before{
		background: #F32435;
	}
	&:hover{		
		color: #fff;
		 border-color: #F32435;
		& .icon{
			> svg{
				fill:#fff;
			}
		}
	}
`;

const DefaultOutlineButton = (props) => {
	const { icon, iconAfter, text, size } = props;
	return (
		<DefaultOutlineBtn className={`btn ${size ? `btn-${size}` : ''} `}>
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
		</DefaultOutlineBtn>
	)
};


export default DefaultOutlineButton;

