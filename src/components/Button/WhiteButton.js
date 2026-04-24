import React from 'react'
import styled from 'styled-components'
import { BaseButton } from '../Section'

const WhiteBtn = styled(BaseButton)`
	background: #fff;
	color:#000;	
	& .icon{
		> svg{
			fill:#000;
		}
	}
	&:after, &:before{
		background: #F32435;
	}
	&:hover{		
		color: #fff;
		border-color: #F32435;
		background: #F32435;
		&:after, &:before{
			background: #F32435;
		}
		& .icon{
			> svg{
				fill:#fff;
			}
		}
	}
`
const WhiteButton = (props) => {
	const { icon, iconAfter, text, size } = props;
	return (
		<WhiteBtn className={`btn ${size ? `btn-${size}` : ''} `}>
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
		</WhiteBtn>
	)
}


export default WhiteButton

