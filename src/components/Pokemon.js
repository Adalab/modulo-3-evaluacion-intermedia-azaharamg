import React from "react";

function Pokemon(props) {
  const descriptions = props.info;
  return (
    <li className="Item">
      <img src={props.image} alt={`imagen ${props.name}`} />
      <h3>{props.name}</h3>
      <ul>
        {descriptions.map((description, index) => {
          return <li key={index}>{description}</li>;
        })}
      </ul>
    </li>
  );
}

export default Pokemon;
