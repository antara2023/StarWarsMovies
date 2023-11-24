import { useEffect, useState } from "react";
import ButtonToggle from "./ButtonToggle";
const People = ({onToggle}) => {
  const [allPeopleData, setAllPeopleData] = useState({});
  const getPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    setAllPeopleData(data);
  };

  useEffect(() => {
    getPeople();
  }, []);
  return (
    <>
      <ButtonToggle onToggle={onToggle}/>
    
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1>People List</h1>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {allPeopleData?.results?.map((people) => {
            return (
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">{people.name}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">
                  {people.birth_year}
                </p>
                <p class="mt-1 text-lg font-medium text-gray-900">
                  {people.species}
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
export default People;
