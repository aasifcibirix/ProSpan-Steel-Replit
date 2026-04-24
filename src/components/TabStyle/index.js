import styled from "styled-components";

export const NavTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media(max-width:575.98px){
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-bottom:0;
    padding-bottom: 10px;
    .navtab-link{
      white-space: nowrap;
    }
  }
  margin:0 -5px 20px -5px;
  @media(min-width:1200px){
    margin:0 -10px 30px -10px;
  }
  @media(min-width:1600px){
    margin:0 -20px 40px -20px;
  }
`;

export const NavItemTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding:0 5px;
  @media(min-width:1200px){
    padding:0 10px;
  }
  @media(min-width:1600px){
    padding:0 20px;
  }
  .navtab-link{
    font-family: 'Rajdhani', serif;
    background-color:transparent;
    color:#5E5E5E;
    font-size:16px;
    line-height:26px; 
    font-weight:600;
    border-radius:28px;
    padding:3px 12px;
    @media(min-width:576px){
      padding:5px 15px;
    }
    @media(min-width:1200px){
      font-size:18px;
      line-height:28px; 
      padding:10px 20px;
    }
    @media(min-width:1600px){
      padding:14px 28px;
    }
    &.active{
      background-color:#0D0A0B;
      color:#fff;
    }
  }
`;

export const NavTabContent = styled.div`

`;

export const NavPane = styled.div`
  display:none;
  &.active{
    display:block;    
  }
`;