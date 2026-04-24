import React from "react";
import styled from "styled-components";
import { BaseButton } from "../Section";

const WhiteLinkBtn = styled(BaseButton)`		
	background-color:transparent;
    border-color:transparent;
	color:#fff;	
	box-shadow:none;
	& .icon{
		> svg{
			fill:#fff;
		}
	}
    &:after, &:before{
		background: #F32435;
	}
	&:hover{		
		color:#fff;
		& .icon{
			> svg{
				fill:#fff;
			}
		}
	}
`;

const WhiteLinkButton = (props) => {
	const { icon, iconAfter, text, size, name } = props;
	return (
		<WhiteLinkBtn className={`btn ${size ? `btn-${size}` : ''} ${name ? `btn-${name}` : ''} `}>
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
		</WhiteLinkBtn>
	)
};


export default WhiteLinkButton;

