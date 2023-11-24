import { useEffect, useState } from "react";
import ButtonToggle from "./ButtonToggle";
import Header from "./Header";
const Films = ({ onToggle }) => {
  const [allFilmData, setAllFilmData] = useState({});
  const getFilms = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    setAllFilmData(data);
  };

  useEffect(() => {
    getFilms();
  }, []);
  return (
    <div class="bg-white">
      <ButtonToggle onToggle={onToggle} />
      {/* <style>
          {background: white; border-radius: 9999px; color: #63b3ed;}
        </style> */}
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1>FilmsList</h1>
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {allFilmData?.results?.map((film) => {
            return (
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="mt-4 text-sm text-gray-700">{film.title}</h3>
                <p class="mt-1 text-lg font-medium text-gray-900">
                  {film.release_date}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Films;
