import React from "react";
import PropTypes from "prop-types";
import "../stylesheet/Pokemon.css";

function Pokemon(props) {
  const handleFavorites = () => {
    props.handleFavorites(props.id);
  };

  const addStylesToFavorites = () => {
    if (props.favorites.includes(props.id)) {
      return "item selected";
    } else {
      return "item";
    }
  };

  const descriptions = props.info;
  return (
    <li className={addStylesToFavorites()} onClick={handleFavorites}>
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

Pokemon.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.array.isRequired
};

export default Pokemon;
