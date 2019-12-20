import React from "react";
import "../stylesheet/Pokemon.css";

function Pokemon(props) {
  const descriptions = props.info;
  return (
    <li className="item">
      <img className="item__image" src={props.image} alt={`imagen ${props.name}`} />
      <h3 className="item__title">{props.name}</h3>
      <ul className="descritpion__list">
        {descriptions.map((description, index) => {
          return (
            <li className="descritpion__item" key={index}>
              {description}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Pokemon;
