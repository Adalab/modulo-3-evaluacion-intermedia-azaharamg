import React from "react";
import PropTypes from "prop-types";
import "../stylesheet/PokeList.css";

function PokeList(props) {
  return <ul className="list">{props.children}</ul>;
}

PokeList.propTypes = {
  children: PropTypes.array.isRequired
};

export default PokeList;
