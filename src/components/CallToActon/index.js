import React from "react"
import styled from "styled-components"
import { CircleArrowIcon, CallIcon } from "../Icons"
import QuotePopUpButton from "../QuotePopUpButton"
import PrimaryButton from "../Button/PrimaryButton"

const CallActon = styled.div`
  display:inline-flex;
  align-items:center;
  flex-wrap:nowrap;
  justify-content: center;
  background-color:#171A1B;
  border-radius:10px;
  padding:5px;  
  @media (min-width: 1600px) {
    display:flex;
  }
  a{
    .btn{
        @media (max-width: 767.98px) {
            padding: 4px 12px;
            font-size: 16px;
            line-height: 20px;
            .icon{
                svg{
                    width:20px;
                }
            }
        }
    }

  }
  button{
    .btn{
        padding:0;
            
        .icon{
            background-color:#fff;
            border-radius:8px;           
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            align-items:center;
            > svg{
                fill:#171A1B;
            }
            padding:6px;                
            @media (min-width: 1200px) {
                padding:8px;
            }
            @media (min-width: 1600px) {
                padding:14px;
            }
        }
        &:hover{
            color:#F32435;
        }
    }
  }
`
const CallItemAction = styled.div`
    + div{
        margin-left:12px;
    }
`

const CallToActon = ({ location }) => {
    return (
        <CallActon className="call-action">
            <CallItemAction className="call-item no-hvr">
                <QuotePopUpButton thanksURL="thank-you-quote-popup" location={location} text="Get A Quote" icon={<CircleArrowIcon />} />
            </CallItemAction>
            <CallItemAction className="call-item">
                <a href="tel:3862470255" aria-label="phone number"><PrimaryButton icon={<CallIcon />} text="(386) 247-0255" /></a>
            </CallItemAction>
        </CallActon>
    )
}

export default CallToActon
