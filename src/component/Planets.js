import { useEffect, useState } from "react";
import ButtonToggle from "./ButtonToggle";
const Planets = ({onToggle}) => {
  const [allPlanetData, setAllPlanetData] = useState({});
  const getPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets");
    const data = await response.json();
    setAllPlanetData(data);
  };

  useEffect(() => {
    getPlanets();
  }, []);
  return (
    <>
      <ButtonToggle onToggle={onToggle}/>
    
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1>Planets List</h1>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {allPlanetData?.results?.map((planet) => {
            return (
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">{planet.name}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">
                  {planet.gravity}
                </p>
                <p class="mt-1 text-lg font-medium text-gray-900">
                  {planet.climate}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};
export default Planets;
