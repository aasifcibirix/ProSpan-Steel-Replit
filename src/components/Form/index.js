import styled from 'styled-components'

import BreakpointUp from '../Media/BreakpointUp'

export const Form = styled.div`   
    max-width:${(props) => props.maxWidth || "100%"};
    ${(props) => props.$bgImg || "inherit"}
    width:100%;
    margin:0 auto;
`
export const FormTitle = styled.div`   
    margin-bottom: ${(props) => props.mb || "40px"};	
    font-weight:700;
    color:${(props) => props.color || "#fff"};

    text-align: center;

    font-size: 18px;
    line-height: 30px;
    @media (min-width: 768px) {
        font-size: 20px;
        line-height: 30px;
    }
    @media (min-width: 992px) {
        font-size: 24px;
        line-height: 34px;
    }
    @media (min-width: 1200px) {
        font-size: 30px;
        line-height: 40px;
    }
`

export const FormSubTitle = styled.div`     
    text-align: center;
    color:${(props) => props.color || "#fff"};
    margin-bottom: ${(props) => props.mb || "15px"};
    font-size: 14px;
    line-height: 24px;
    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 28px;
    }
    @media (min-width: 992px) {
        font-size: 18px;
        line-height: 30px;
    }
    @media (min-width: 1200px) {
        font-size: 22px;
        line-height: 32px;
    }
`

export const FormHeader = styled.div`
  position: relative;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  h1{
    text-transform: uppercase;
    margin-left:0;
    width:auto ;
  }
`;

export const FormRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin:0 -10px;
    ${BreakpointUp.xxl`
        margin:0 -15px;
    `}
`
export const FormTwoCol = styled.div`
    position: relative;
    width:100%;
    padding:0 10px;
    ${BreakpointUp.sm` 
        flex: 0 0 50%;
        max-width: 50%;
    `}
    ${BreakpointUp.xxl`
        padding:0 15px;
    `}
`
export const FormThreeCol = styled.div`
    position: relative;
    width:100%;
    padding:0 10px;
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
    ${BreakpointUp.xxl`
        padding:0 15px;
    `}
`
export const FormCol = styled.div`
    position: relative;
    width:100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding:0 10px;
    ${BreakpointUp.xxl`
        padding:0 15px;
    `}
`
export const FormAction = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:${(props) => props.justifyContent || "center"};  
    
`


