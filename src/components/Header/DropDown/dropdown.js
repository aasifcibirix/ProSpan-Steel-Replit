import styled from 'styled-components'

export const DropDown = styled.div`  
  display:none;
  width:100%; 
  @media(min-width:1200px){
    position: absolute;
    z-index:1;    
    left:0;
    min-width: 325px;
    max-width: 325px;
    transform: scale(0.8) translateY(-12%);
    top:100%;
  }
  &.active{
    display:block;
  }
  &.dropdown-mega-menu{
    @media(min-width:1200px){      
      min-width: 675px;
      max-width: 675px;
    }
  }
`
export const DropDownBody = styled.div`  
  @media(min-width:1200px){      
    padding: 20px 0;
    margin-top:45px;
    background: #fff;
    border-radius:20px; 
    box-shadow: 0 20px 32px -12px #3226621f, 0 1px 2px #3226620f;
  }
`


export const DropDownList = styled.ul`
  list-style:none;
  margin:0;
  padding:0;
  transition:all 0.5s ease;
  max-height: 438px;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius:6px;
  }

  ::-webkit-scrollbar-thumb {
      background: #999; 
      border-radius:6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #666; 
  }
  @media screen and ( max-height: 680px ){
    max-height: 338px;
  }
  &.dropdown-mega-list{
    @media(min-width:1200px){
      display:block;
      columns:2;
    }
  }  
`
export const DropDownListItem = styled.li`
  position:relative;
  margin-bottom:0;

  

  padding:0 10px;
  @media(min-width:1200px){
    padding:0 20px;
  }
  > a{
    display:flex;
    align-items: center;
    position:relative;
    z-index:1;
    cursor: pointer;
    width: 100%;
    color:#2B2B2B;

    padding: 10px 12px;
    border-radius: 14px;
    transition: background-color .45s cubic-bezier(.6, .6, 0, 1);
    width: 100%;

    font-size: 16px;
    line-height: 24px;
    @media(min-width:1200px){
      font-size: 18px;
      line-height: 26px;
    }
    
    &:hover{
      color:#0D0A0B;
      background-color:rgba(209,209,209,0.15);  
    }
  }
`