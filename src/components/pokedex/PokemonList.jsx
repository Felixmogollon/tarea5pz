import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
  return (
    <section className="grid p-4  gap-4 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] max-w-[1024px] mx-auto font-fira-Code">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemonUrl={pokemon.url} />
      ))}
    </section>
  );
};
export default PokemonList;
