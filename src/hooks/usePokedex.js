import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getAllPokemons,
  getAllTypes,
  getPokemonsByType,
} from "../services/pokemons";

const usePokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [types, setTypes] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { name } = useSelector((store) => store.trainer);

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())
  );

  useEffect(() => {
    if (!pokemonType) {
      setIsLoading(true);
      getAllPokemons()
        .then((data) => {
          setPokemons(data);
        })
        .catch((err) => {
          console.log(err);
          setIsError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [pokemonType]);

  useEffect(() => {
    if (pokemonType) {
      setIsLoading(true);
      getPokemonsByType(pokemonType).then((data) => {
        setPokemons(data);
        setIsLoading(false);
      });
    }
  }, [pokemonType]);

  useEffect(() => {
    getAllTypes()
      .then((types) => setTypes(types))
      .catch((err) => console.log(err));
  }, []);

  return {
    name,
    pokemonName,
    setPokemonType,
    pokemonType,
    handleChange,
    setPokemonName,
    pokemonsByName,
    isLoading,
    isError,
    types,
  };
};
export default usePokedex;
