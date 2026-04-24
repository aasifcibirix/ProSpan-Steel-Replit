import styled from "styled-components";

export const Toolbar = styled.div`
  margin: 0 -5px 30px -5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
export const ToolbarItems = styled.div`
  position: relative;
  padding: 0 5px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;

export const ToolbarList = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  justify-content: center;
  @media (min-width: 576px) {
    justify-content: space-between;
  }
`;
export const Showing = styled.div`
  color: #6F6F6F;
  @media (max-width: 575.98px) {
    display: none;
  }
  strong {
    font-weight: 500;
    color: #F32435;
  }
`;
export const PerPage = styled.div`
  flex-wrap: wrap;
  margin: 0 -5px;
  display: none;
  @media (min-width: 576px) {
    display: flex;
  }
  > a,
  .page-size {
    position: relative;
    font-weight: 500;
    padding: 0 5px;
    color: #6F6F6F;
    &:hover {
      color: #F32435;
    }
    &.disabled {
      color: #6F6F6F;
      font-weight: 400;
    }
    &.active {
      color: #F32435;
    }
  }

  .page-size {
    cursor: pointer;
  }
`;
export const Pages = styled.div``;
export const PageList = styled.div`
  list-style: none;
  margin: 0 -6px;
  padding: 0;
  display: flex;
  align-items: center;
`;
export const PageItem = styled.div`
  position: relative;
  margin: 0 6px;
  color:#61605D;
  col
  span, a{
    width:32px;
    height:32px;
    border-radius:4px;
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid #61605D;
    color:#61605D;
   
    background-color:#000;
  }
  &.next, &.previous{
    > a {
      border-color:#000;
      background-color:#212324;
      color:#fff;
    }
  }
  span.selectable-pageno {
    color: #61605D;
    background-color:transparent;
     cursor: pointer;
  }
`;
