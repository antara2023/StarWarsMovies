import { useState } from "react";
import Films from "./Films";
import FilmList from "./FilmsList";

const FilmWrap = ()=>{
    const [toggleView, setToggleView] = useState(true) 
    {return toggleView? <Films onToggle={setToggleView}/>:<FilmList onToggle={setToggleView}/>}
}
export default FilmWrap 