import { useState } from "react";
import Vehicles from "./Vehicles";
import VehiclesList from "./VehiclesList";

const VehiclesWrap = ()=>{
    const [toggleView, setToggleView] = useState(false)
    {return toggleView? <Vehicles onToggle={setToggleView}/>:<VehiclesList onToggle={setToggleView}/>}
}
export default VehiclesWrap 