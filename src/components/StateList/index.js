import React from "react"
import { Link } from "gatsby";
import { MapIcon } from "src/components/Icons";
import { ListLocation, ListItemLocation } from "../Section";

const cityData = [
"Alabama","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana",
"Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","Ohio",
"Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"
].map(cityname => ({ cityname }));

const StateList = () => {
  return (
    <ListLocation>
        {cityData.map((item, index) =>
        <ListItemLocation key={index}>
            <Link to="/florida">
                <span className="icon"><MapIcon /></span>
                <span className="text">{item.cityname}</span>
            </Link>
        </ListItemLocation>
        )}   
    </ListLocation>
  )
}

export default StateList