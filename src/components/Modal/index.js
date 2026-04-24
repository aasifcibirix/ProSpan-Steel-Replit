import styled from 'styled-components'

export const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1050;
	width: 100%;
	height: 100%;
	overflow: hidden;
	outline: 0;
	display: ${props => props.hidden ? "none" : "block"};
`

Modal.defaultProps = {
}
export const CloseButton = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	right: 10px;
	top: 10px;
	width: 28px;
	height: 28px;
	cursor: pointer;
	z-index:1;
	background-color:#fff;
	transition:all 0.5s ease-in-out;
	border-radius:50%;
	svg {
		width: 10px;
		height: 10px;
		fill: #0D0A0B;
	}
	&:hover {
		background-color:#484b58;
		svg {
			fill:#fff;
		}
	}


`
CloseButton.defaultProps = {
}

export const ModalDialog = styled.div`
	position: relative;
	width: auto;
	pointer-events: none; 
`
ModalDialog.defaultProps = {
}

export const ModalContent = styled.div`
	background-color: ${(props) => props.$bgcolor || "#0D0A0B"};	
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	pointer-events: auto;
	background-clip: padding-box;
	outline: 0;
	border-radius: 12px;
`

export const ModalBody = styled.div`
	position: relative;
	flex: 1 1 auto;
	padding: 40px 20px 20px;
	@media(min-width:768px){
		padding:60px 30px 30px;
	}
	
	@media(min-width:992px){
		padding: 60px;
	}
`
ModalBody.defaultProps = {
}

export const ModalSubTitle = styled.div`   
	font-weight: 500;
	color:#fff;
`
ModalSubTitle.defaultProps = {
}

export const ModalTitle = styled.h3`   
	color:#fff;
	text-transform:uppercase;	
`
ModalTitle.defaultProps = {

}


export const ModalFooter = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-end;
	padding:15px;
`
ModalFooter.defaultProps = {
}

export const ModalBackdrop = styled.div`
	position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #161420;
	inset: 0px;
	opacity: .8;
	display: ${props => props.hidden ? "none" : "block"};
`