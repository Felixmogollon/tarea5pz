import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import { IconArrowBackUp } from "@tabler/icons-react";
import StatBarList from "../components/pokemonDetail/StatBarList";
import {

  bgStylePokemonType,
  borderStyledPokemonByType,
} from "../shared/pokemon";
import Movents from "../components/pokemonDetail/Movents";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="grid place-items-center gap-8 pb-8 font-fira-Code py-4">
      <Link
        to={-1}
        className="bg-black/40 p-2 rounded-md fixed top-[130px] z-10 left-[15px] "
      >
        <i className="sm:text-[40px] text-[15px]  text-white font-semibold"><IconArrowBackUp/> </i>
      </Link>
      <header className=" h-16 w-full "></header>

      <article className="w-[min(90%,_800px)] shadow-xl pb-4">
        <div
          className={`h-[90px]  relative mb-8 ${
            bgStylePokemonType[pokemonData?.types[0]]
          }`}
        >
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 h-[200px] aspect-square mx-auto">
            <img
              className="h-full w-full object-contain"
              src={pokemonData?.image}
              alt=""
            />
          </div>
        </div>
        <section className="text-center grid gap-2">
          <span>#{pokemonData?.id}</span>
          <span className="capitalize font-bold text-xl">
            {pokemonData?.name}
          </span>
          <section className="flex justify-center items-center gap-8">
            <div>
              <h4>Weight</h4>
              <span>{pokemonData?.weight}</span>
            </div>
            <div>
              <h4>Height</h4>
              <span>{pokemonData?.height}</span>
            </div>
          </section>
          <section className="grid grid-cols-2  ">
            <article className="p-2 grid gap-2 justify-center">
              <h3>Types</h3>
              <span
                className={`p-1 ${
                  borderStyledPokemonByType[pokemonData?.types[0]]
                }  px-4 capitalize w-[130px] `}
              >
                {pokemonData?.types[0]}
              </span>
            </article>
            <article className="p-2 grid gap-2 justify-center">
              <h3>Habilities</h3>
              <span className=" w-[130px]  capitalize border-[5px] border-gray-400 p-1 px-4 line-clamp-1">
                {pokemonData?.abilities[0]}
              </span>
            </article>
          </section>

          <StatBarList stats={pokemonData?.stats} />
        </section>
      </article>
      <article className="w-[min(90%,_800px)] shadow-xl p-4 ">
        <h3>Movements </h3>
        <section className="flex flex-wrap gap-2 p-4">
          {pokemonData?.moves.map((move) => (
            <Movents key={move} moves={move} />
          ))}
        </section>
      </article>
    </main>
  );
};
export default PokemonDetail;
