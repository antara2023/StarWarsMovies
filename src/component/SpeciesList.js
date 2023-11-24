import { useEffect, useState } from "react";
import ButtonToggle from "./ButtonToggle";
const SpeciesList = ({onToggle}) => {
  const [allSpeciesData, setAllSpeciesData] = useState({});
  const [toggleView, setToggleView] = useState(true);
  const getSpecies = async () => {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    setAllSpeciesData(data);
  };

  useEffect(() => {
    getSpecies();
  }, []);
  return (
    <>
        <ButtonToggle onToggle={onToggle}/>
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full px-3 mb-6  mx-auto">
          <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
            <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
              <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                  <span className="mr-3 font-semibold text-dark">
                    Projects Deliveries
                  </span>
                  <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                    All projects from the Loopple team
                  </span>
                </h3>
                <div className="relative flex flex-wrap items-center my-2">
                  <a
                    href="javascript:void(0)"
                    className="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-light-dark border-light shadow-none border-0 py-2 px-5 hover:bg-secondary active:bg-light focus:bg-light"
                  >
                    {" "}
                    See other projects{" "}
                  </a>
                </div>
              </div>
              <div className="flex-auto block py-8 pt-6 px-9">
                <div className="overflow-x-auto">
                  <table className="w-full my-0 align-middle text-dark border-neutral-200">
                    <thead className="align-bottom">
                      <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                        <th className="pb-3 text-start min-w-[175px]">Name</th>
                        <th className="pb-3 text-end min-w-[100px]">
                          Home World
                        </th>
                        <th className="pb-3 text-end min-w-[100px]">
                          Average Lifespan
                        </th>
                        <th className="pb-3 pr-12 text-end min-w-[175px]">
                          classification
                        </th>
                        <th className="pb-3 pr-12 text-end min-w-[100px]">
                          Language
                        </th>
                        <th className="pb-3 text-end min-w-[50px]">DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allSpeciesData?.results?.map((Species) => {
                        return (
                          <tr className="border-b border-dashed last:border-b-0">
                            <td className="p-3 pl-0">
                              <div className="flex items-center">
                                <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                  <img
                                    src="https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4"
                                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                    alt=""
                                  />
                                </div>
                                <div className="flex flex-col justify-start">
                                  <a
                                    href="javascript:void(0)"
                                    className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"
                                  >
                                    {" "}
                                    {Species.name}{" "}
                                  </a>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 pr-0 text-end">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                {Species.homeworld}
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-end">
                              <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5 mr-1"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                                  />
                                </svg>{" "}
                                {Species.average_lifespan}{" "}
                              </span>
                            </td>
                            <td className="p-3 pr-12 text-end">
                              <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg">
                                {" "}
                                {Species.classification}{" "}
                              </span>
                            </td>
                            <td className="pr-0 text-start">
                              <span className="font-semibold text-light-inverse text-md/normal">
                                {Species.language}
                              </span>
                            </td>
                            <td className="p-3 pr-0 text-end">
                              <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full sm:w-3/4 mx-auto text-center"></div>
      </div>
    </>
  );
};
export default SpeciesList;
