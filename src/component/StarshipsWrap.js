import { useState } from "react";
import Starships from "./Starships";
import StarshipsList from "./StarshipsList";

const StarshipsWrap = ()=>{
    const [toggleView, setToggleView] = useState(false)
    {return toggleView? <Starships onToggle={setToggleView}/>:<StarshipsList onToggle={setToggleView}/>}
}
export default StarshipsWrap