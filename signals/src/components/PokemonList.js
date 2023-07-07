import React from "react";
import { signal, effect } from "@preact/signals-react";

const pokemon = signal([]);
fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  .then((res) => res.json())
  .then((data) => pokemon.value = data.results);

function PokemonList() {

  // effect(() => {
  //   fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
  //     .then((res) => res.json())
  //     .then((data) => pokemon.value = data.results);
  // });

  if (!pokemon.value || pokemon.value.length <= 0) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {pokemon.value.map((poke) => (
        <li key={poke.name}>{poke.name}</li>
      ))}
    </ul>
  );
}

export default PokemonList;
