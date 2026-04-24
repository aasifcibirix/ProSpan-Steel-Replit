import React from "react";
import styled from "styled-components";
import { BaseButton } from "../Section";

const DefaultLinkBtn = styled(BaseButton)`		
	background-color:transparent;
	border-color:transparent;
	color:#2B2B2B;	
	box-shadow:none;
	& .icon{
		> svg{
			fill:#2B2B2B;
		}
	}
	&:hover{		
		color:#000;
		& .icon{
			> svg{
				fill:#000;
			}
		}
	}
`;

const DefaultLinkButton = (props) => {
	const { icon, iconAfter, text, size, name } = props;
	return (
		<DefaultLinkBtn className={`btn ${size ? `btn-${size}` : ''} ${name ? `btn-${name}` : ''} `}>
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
		</DefaultLinkBtn>
	)
};


export default DefaultLinkButton;

