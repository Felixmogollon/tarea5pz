import axios from "axios";

export const getAllPokemons = async () => {
  const URL_BASE = "https://pokeapi.co/api/v2/pokemon?limit=1281";
  const { data } = await axios.get(URL_BASE);
  return data.results;
};
export const getAllTypes = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/type");
  return data.results;
};
export const getPokemonByUrl = async (pokemonUrl) => {
  const { data } = await axios.get(pokemonUrl);

  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image:
      data.sprites.versions["generation-v"]["black-white"].animated
        .front_default,
    imageRespaldo: data.sprites.other["official-artwork"].front_default,
  };
  return pokemon;
};

const formatStats = (stats) => {
  return stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  }));
};
const formatTypes = (types) => {
  return types.map((type) => type.type.name);
};

const formatHabilities = (abilities) => {
  return abilities.map((abilitie) => abilitie.ability.name);
};

const formatMoves = (moves) => {
  return moves.map((move) => move.move.name);
};

export const getPokemonsByType = async (pokemonType) => {
  const URL = `https://pokeapi.co/api/v2/type/${pokemonType}/`;

  const { data } = await axios.get(URL);
  const formatPokemons = data.pokemon.map(({ pokemon }) => pokemon);
  return formatPokemons;
};

export const getPokemonById = async (pokemonId) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

  const { data } = await axios.get(URL);

  const pokemon = {
    id: data.id,
    name: data.name,
    types: formatTypes(data.types),
    stats: formatStats(data.stats),
    image: data.sprites.other["official-artwork"].front_default,
    weight: data.weight,
    height: data.height,
    abilities: formatHabilities(data.abilities),
    moves: formatMoves(data.moves),
  };
  return pokemon;
};

export const joinPokemonsTypes = (types = []) => {
  return types.slice(0, 2).join(" / ");
};
