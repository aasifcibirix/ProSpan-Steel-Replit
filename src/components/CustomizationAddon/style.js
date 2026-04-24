import styled from 'styled-components'

export const Accordions = styled.div` 
  counter-reset: section;
`
export const Accordionsitems = styled.div`
  position:relative;
  overflow: hidden;
  border: 1px solid #E8E8E8;
  border-radius:8px;
  @media (min-width: 768px) {    
    border-radius:12px;
  }
  @media (min-width: 992px) {
    border-radius:15px;
  }
  @media (min-width: 1200px) {
    border-radius:20px;
  }
  + .accordions-items{
    margin-top:20px;
  }
  &.active{
    opacity:1;    
    .accordions-title{
      padding-bottom:0;
    }
    .icon{
      transform:rotate(180deg);          
    }
    .accordions-content{
      max-height:4000px;
      overflow:inherit;
      transition: max-height 0.2s ease-out;
    }
        
    }
    &:not(.active):hover{
      .accordions-title{
          color: #fff;
          background-color:#0D0A0B;
          border-color:#0D0A0B;
          box-shadow: 0px 26px 35px -10px rgba(0, 0, 0, 0.25);
          i, .icon{
              border-color:#fff;
              svg{
                  fill:#fff;
              }
          }
      }
    } 
`
export const AccordionsContent = styled.div`
  max-height:0;
  overflow:hidden;
  transition: max-height .35s ease;
  position: relative;
  ul{
    margin-left:0;
    li{
        list-style:none;
        position:relative;
        padding-left:24px;
        margin-bottom:0;
        strong{
            font-weight:500;
            font-size:18px;
            line-height:24px;
        }
        + li{            
            margin-top:30px;
            &:after{
                position: absolute;
                content: '';
                width: calc(100% - 24px);
                top: -15px;
                height: 1px;
                background-color: #EAEAEA;
            }
            
        }
        &:before{
            position:absolute;
            content: '';
            left:0;
            border-radius:50%;
            border: 2px solid #2B2B2B;
            top:10px;
            width:10px;
            height:10px;
            @media (min-width: 1600px) {
                border: 3px solid #2B2B2B;
                top:14px;
                width:14px;
                height:14px;
            }
        }
    }
  }

`
export const AccordionsContentinner = styled.div`
  padding:10px 15px 10px 15px;
  @media (min-width: 992px) {    
    padding:10px 20px 15px 20px;
  }
  @media (min-width: 1200px) {
    padding:10px 20px 20px 20px;
  }
  @media (min-width: 1600px) {
    padding:10px 30px 30px 30px;
  }
  > p{
    margin-bottom:0;
    + p{
      margin-top:15px;
    }
  }
`
export const AccordionsTitle = styled.div`  
  cursor: pointer;
  display:flex;
  align-items:center;
  justify-content:space-between;
  position:relative;
  z-index:1;
  color: #2B2B2B;
  padding:10px 15px;
  @media (min-width: 992px) {
    padding:15px 20px;
  }
  @media (min-width: 1200px) {
    padding:20px;
  }
  @media (min-width: 1600px) {
    padding:28px;    
  }
  .text{
    i, strong, p{
      display:flex;
    }
    p{
      margin-bottom:0;
    }
    i{
        margin-bottom:10px;
        svg{
          fill:#2B2B2B
        }
    }
    strong{
      font-weight:500;
      font-size:20px;
      line-height:26px;
      @media(min-width:1200px){
        font-size:26px;
        line-height:32px;
      } 
      p{
        margin-bottom:0;
      }
    }
    + .icon{
      margin-left:15px;
    }
  }
  .icon{
    position:relative;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all .35s ease;   
    margin-left: auto;
    border:1px solid #2B2B2B;
    border-radius:50%;
    width:24px; 
    min-width: 24px;
    height:24px; 
    @media (min-width: 992px) {
      width:30px; 
      min-width: 30px;
      height:30px; 
    }
    svg{
      fill:#2B2B2B;
    }
  }
  
`

