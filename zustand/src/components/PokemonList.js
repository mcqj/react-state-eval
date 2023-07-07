import { useEffect } from "react";
import { useAppStore } from "../store";

function PokemonList() {
  const getPokemons = useAppStore((state) => state.fetchPokemon);
  const pokemonList = useAppStore((state) => state.pokemon);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  if (!pokemonList.length) {
    return "... Loading";
  }
  return (
    <ol>
      {pokemonList.map((p) => (
        <li key={p.name}>{p.name.charAt(0).toUpperCase() + p.name.slice(1)}</li>
      ))}
    </ol>
  );
}

export default PokemonList;