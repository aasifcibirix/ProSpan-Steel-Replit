import styled from 'styled-components'

export const SocialIcon = styled.ul`
  display: flex;
  flex-wrap:wrap;
  padding: 0;
  margin:0 -3px;
  @media (min-width: 576px) {
    margin:0 -5px;
  }
  @media (min-width: 992px) {  
    margin:0 -8px;
  }
`

export const SocialItem = styled.li`
  list-style: none;    
  margin-bottom:0;
  padding:0 3px;
  @media (min-width: 576px) {
    padding:0 5px;
  }
  @media (min-width: 1200px) {
    padding:0 8px;
  }
  a{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color:#fff;    
    border:1px solid #fff;
    border-radius:6px;
    transition: .5s;
    width:30px;
    height:30px;
    @media (min-width: 576px) {
      width:34px;
      height:34px;
    }
    svg{
      fill:#171A1B;
      transition: .5s;
      transform: scale(0.5);
      @media (min-width: 576px) {
        transform: scale(0.7);
      }
    }
    &:hover{      
      border-color:#F32435;
      svg{
        fill: #F32435;        
        transform: scale(0.7);
        @media (min-width: 576px) {
          transform: scale(0.9);
        }
      }
    }
  }
`