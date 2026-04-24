import React from "react"
import { MapIcon } from "src/components/Icons";
import { ListLocation, ListItemLocation } from "../Section";

const cityData = [
    "Alabama", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Colorado", "Connecticut", "Delaware", "Florida", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Connecticut", "Delaware", "Florida", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas"].map(cityname => ({ cityname }));

const CityList = () => {
  return (
    <ListLocation>
        {cityData.map((item, index) =>
        <ListItemLocation key={index}>
            <span className="icon"><MapIcon /></span>
            <span className="text">{item.cityname}</span>
        </ListItemLocation>
        )}   
    </ListLocation>
  )
}

export default CityList