import { useState } from "react";
import People from "./People";
import PeopleList from "./PeopleList";


const PeopleWrap = ()=>{
    const [toggleView, setToggleView] = useState(false)
    {return toggleView? <People onToggle={setToggleView}/>:<PeopleList onToggle={setToggleView}/>}
}
export default PeopleWrap 