import React from "react";
import "../stylesheet/App.css";
import data from "../api/api.json";
import PokeList from "./PokeList";
import Pokemon from "./Pokemon";
import SearchInput from "./SearchInput";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      favorites: [],
      userSearch: ""
    };
    this.handleFavorites = this.handleFavorites.bind(this);
    this.handleSearchPokemon = this.handleSearchPokemon.bind(this);
  }

  handleSearchPokemon(userSearch) {
    this.setState({
      userSearch: userSearch.value.toLowerCase()
    });
  }

  handleFavorites(selectedPokemonId) {
    this.setState(prevState => {
      const pokemonIndex = prevState.favorites.findIndex(pokemonId => pokemonId === selectedPokemonId);
      if (pokemonIndex < 0) {
        prevState.favorites.push(selectedPokemonId);
      } else {
        prevState.favorites.splice(pokemonIndex, 1);
      }
      return {
        favorites: prevState.favorites
      };
    });
  }

  render() {
    console.log(this.state.userSearch);
    return (
      <div className="app">
        <h1 className="app__title">Pokédex</h1>
        <SearchInput handleSearchPokemon={this.handleSearchPokemon} />
        <PokeList>
          {this.state.data
            .filter(pokemon => pokemon.name.toLowerCase().includes(this.state.userSearch))
            .map(item => {
              return (
                <Pokemon
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.url}
                  info={item.types}
                  favorites={this.state.favorites}
                  handleFavorites={this.handleFavorites}
                />
              );
            })}
        </PokeList>
      </div>
    );
  }
}

export default App;
