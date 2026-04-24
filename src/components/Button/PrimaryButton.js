import React from 'react'
import styled from 'styled-components'
import { BaseButton } from '../Section'

const PrimaryBtn = styled(BaseButton)`
	background: #F32435;
	border-color:#F32435;
	color:#fff;	
	& .icon{
		> svg{
			fill:#fff;
		}
	}
	&:after, &:before{
		@media (min-width:992px) {
			background: #fff;
		}
	}
	&:hover{
		@media (min-width:992px) {
			color: #000;	
			border-color:#fff;		
			& .icon{
				> svg{
					fill:#000;
				}
			}
		}
	}
`

const PrimaryButton = (props) => {
	const { icon, iconAfter, text, size } = props;
	return (
		<PrimaryBtn className={`btn ${size ? `btn-${size}` : ''} `}>
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
		</PrimaryBtn>
	)
}


export default PrimaryButton

