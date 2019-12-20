import React from "react";

function PokeList(props) {
  return <ul className="List">{props.children}</ul>;
}

export default PokeList;
