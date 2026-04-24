import React from "react"
import styled from "styled-components"

const ListInfo = styled.div`
  margin-bottom:25px;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  @media (min-width: 992px) {
    font-size: 18px;
    line-height: 30px;
  }
`
const ListItemInfo = styled.div`
  display:flex;
  flex-wrap:nowrap;
  align-items: self-start;
  color:#fff;    
  .text{
    small{
      display:block;
      font-size: 14px;
      line-height: 20px;
       font-weight: 300;
      @media (min-width: 992px) {
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
  a{
    position:relative;
    display:inline-block;
    color:#fff;
    &:hover{
      color:#F32435;
    }
  }
  + .list-item{
    margin-top: 10px;
    @media (min-width: 992px) {
      margin-top: 20px;
    }
  }
`


const AddressList = () => {
  return (
    <ListInfo className="list-info">
      <ListItemInfo className="list-item">
        <span className="text"><small>Address</small> 792 SW Bascom Norris Dr. Lake City, FL 32025</span>
      </ListItemInfo>
      <ListItemInfo className="list-item">
        <span className="text"><small>Business days and hours</small> Monday - Friday 9:00AM - 5:00PM</span>
      </ListItemInfo>
      <ListItemInfo className="list-item">
        <span className="text"><small>Email</small> <a href="mailto:info@prospansteel.com">info@prospansteel.com</a></span>
      </ListItemInfo>
      <ListItemInfo className="list-item">
        <span className="text"><small>Phone</small> <a href="tel:3862470255">(386) 247-0255</a></span>
      </ListItemInfo>
      <ListItemInfo className="list-item">
        <span className="text"><small>Toll Free</small> <a href="tel:8554930332">(855) 493-0332</a></span>
      </ListItemInfo>
    </ListInfo>
  )
}

export default AddressList