import { useState } from "react";
import Planets from "./Planets";
import PlanetsList from "./PlanetsList";



const PlanetsWrap = ()=>{
    const [toggleView, setToggleView] = useState(false)
    {return toggleView? <Planets onToggle={setToggleView}/>:<PlanetsList onToggle={setToggleView}/>}
}
export default PlanetsWrap