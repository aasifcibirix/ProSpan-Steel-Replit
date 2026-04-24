import styled from "styled-components";
export const Sidebar = styled.div`
  margin:0;
  padding:0;
`

export const SidebarCard = styled.div`
  position: relative;
  background:${(props) => props.bkgColor || "#181A1B"};
  border:1px solid ${(props) => props.bdrColor || "translate"};
  margin-bottom:20px;
  border-radius:6px;
  @media (min-width: 768px) {
    border-radius:10px;
  }
  @media (min-width: 992px) {
    border-radius:15px;
    margin-bottom:30px;
  }
  @media (min-width: 1200px) {
    border-radius:20px;
  }
  @media (min-width: 1600px) {
    border-radius:30px;
  }
`;

export const SidebarCardTitle = styled.div`
  margin-bottom: ${(props) => props.mb || "15px"};	
  text-align: ${(props) => props.TextAlign || "left"};	
  font-family: 'Rajdhani', serif;
  font-weight:600;
  color:${(props) => props.color || "#fff"};
  font-size: 20px;
  line-height: 30px;
  @media (min-width: 992px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media (min-width: 1200px) {
    font-size: 30px;
    line-height: 40px;
  }
  hr{
    margin-bottom: 30px;
    background: #C7C7C7;
  }
`;

export const SidebarCardBody = styled.div`
  position:relative;
  padding:20px 15px;
  @media (min-width: 992px) {
    padding:30px 20px;
  }
  @media (min-width: 1600px) {
    padding:40px 30px;
  }
`;

export const SidebarForm = styled.div`
  position: relative;
  z-index: 1;
`;
