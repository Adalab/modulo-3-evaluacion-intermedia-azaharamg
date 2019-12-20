import React from "react";
import "../stylesheet/App.css";
import data from "../api/api.json";
import PokeList from "./PokeList";
import Pokemon from "./Pokemon";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">Mi lista de pokemon</h1>
      <PokeList>
        {data.map(item => {
          return <Pokemon key={item.id} name={item.name} image={item.url} info={item.types} />;
        })}
      </PokeList>
    </div>
  );
}

export default App;
