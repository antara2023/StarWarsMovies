import { useState } from "react";
import Species from "./Species";
import SpeciesList from "./SpeciesList";




const SpeciesWrap = ()=>{
    const [toggleView, setToggleView] = useState(false)
    {return toggleView? <Species onToggle={setToggleView}/>:<SpeciesList onToggle={setToggleView}/>}
}
export default SpeciesWrap