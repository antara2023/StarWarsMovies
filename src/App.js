import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SidebarLayout from "./Layout/SidebarLayout";
import FilmWrap from "./component/FilmWrap";
import PeopleWrap from "./component/PeopleWrap";
import PlanetsWrap from "./component/PlanetsWrap";
import SpeciesWrap from "./component/SpeciesWrap";
import StarshipsWrap from "./component/StarshipsWrap";
import VehiclesWrap from "./component/VehiclesWrap";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<SidebarLayout ><iframe
                src="https://chatapp-git-main-antaras-projects.vercel.app/"
                height="300"
                width="450"
                title="Chat Widget"
              ></iframe><FilmWrap/></SidebarLayout>/>
          <Route path="/films" element=<SidebarLayout ><FilmWrap/></SidebarLayout>/>
          <Route path="/people" element=<SidebarLayout ><PeopleWrap/></SidebarLayout>/>
          <Route path="/planets" element=<SidebarLayout ><PlanetsWrap/></SidebarLayout>/>
          <Route path="/species" element=<SidebarLayout ><SpeciesWrap/></SidebarLayout>/>
          <Route path="/Starships" element=<SidebarLayout ><StarshipsWrap/></SidebarLayout>/>
          <Route path="/vehicles" element=<SidebarLayout ><VehiclesWrap/></SidebarLayout>/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
