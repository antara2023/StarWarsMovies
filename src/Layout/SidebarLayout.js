import { Children, useEffect } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

const SidebarLayout = ({ children, onToggle }) => {
  function dropdown() {
    document.querySelector("#submenu").classList.toggle("hidden");
    document.querySelector("#arrow").classList.toggle("rotate-0");
  }

  // useEffect(() => {
  //   dropdown();
  // }, []);

  function openSidebar() {
    console.log("hi");
    document.querySelector(".sidebar").classList.toggle("hidden");
  }
  return (
    <>
      <div className="">
        {/* <span
          className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
          onClick={openSidebar}
        >
          <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
        </span> */}
        <div className="sidebar p-2 fixed top-0 left-0 w-[250px] overflow-y-auto text-center bg-gray-900 min-h-screen">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center">
              <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              <Header />
              </h1>
              <i
                className="bi bi-x cursor-pointer ml-28 lg:hidden"
                onClick={openSidebar}
              ></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
          </div>
          <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
            <i className="bi bi-search text-sm"></i>
            <input
              type="text"
              placeholder="Search"
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
            />
          </div>
          <Link to="/films">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Films
              </span>
            </div>
          </Link>
          <Link to="/people">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                People
              </span>
            </div>
          </Link>
          <Link to="/planets">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Planets
              </span>
            </div>
          </Link>
          <Link to="/species">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Species
              </span>
            </div>
          </Link>
          <Link to="/starships">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Starships
              </span>
            </div>
          </Link>
          <Link to="/vehicles">
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Vehicles
              </span>
            </div>
          </Link>
        </div>
        <div className="main ml-[280px]">{children}</div>
      </div>
    </>
  );
};
export default SidebarLayout;
