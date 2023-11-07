import { useEffect, useState } from "react";
import ErrorMessage from "../components/Error/ErrorMessage";
import Loader from "../components/loader/Loader";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import Paginations from "../components/pokedex/Paginations";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    name,
    pokemonName,
    setPokemonType,
    pokemonType,
    handleChange,
    setPokemonName,
    pokemonsByName,
    isError,
    isLoading,
    types,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemonType]);

  return (
    <main>
      {isLoading && <Loader isLoading={isLoading} />}
      {isError && <ErrorMessage />}
      {!isError && (
        <>
          <section className="grid gap-2 p-2 px-4 font-inter max-w-[1024px] mx-auto ">
            <p className=" text-red-500 font-fira-Code font-bold text-center grid">
              <span className="text-[25px]">Welcome</span>
              <span className="uppercase"> {name} </span>
            </p>
            <p className="text-center font-fira-Code text-[15px]">
              Here you can find your favorite pokemon
            </p>
            <form className="grid gap-4 justify-center sm:justify-between p-4 sm:flex sm:gap-4 font-fira-Code ">
              <div>
                <input
                  className="shadow-md p-2 focus:outline-none sm:w-[300px]"
                  value={pokemonName}
                  onChange={handleChange(setPokemonName)}
                  type="text"
                  placeholder="Search pokemon ..."
                />
              </div>
              <select
                className="shadow-sm p-2 focus:outline-none rounded-md sm:w-[200px] font-fira-Code"
                value={pokemonType}
                onChange={handleChange(setPokemonType)}
              >
                <option value="">All pokemons</option>
                {types.map((type) => (
                  <option
                    className="capitalize"
                    key={type.url}
                    value={type.name}
                  >
                    {type.name}
                  </option>
                ))}
              </select>
            </form>
          </section>
          <Paginations
            lastPage={lastPage}
            pagesInCurrentBlock={pagesInCurrentBlock}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <PokemonList pokemons={itemsInCurrentPage} />
        </>
      )}
    </main>
  );
};
export default Pokedex;
