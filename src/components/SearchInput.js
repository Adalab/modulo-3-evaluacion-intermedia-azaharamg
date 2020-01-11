import React from "react";
import "../stylesheet/Search.css";
function SearchInput(props) {
  const handleSearchPokemon = ev => {
    props.handleSearchPokemon({ value: ev.target.value });
  };

  return (
    <form className="form">
      <label className="search__label" htmlFor="pokemonName">
        Buscador de Pokemon:
      </label>
      <input className="search__input" type="text" name="pokemonName" id="pokemonName" onChange={handleSearchPokemon} />
    </form>
  );
}

export default SearchInput;
