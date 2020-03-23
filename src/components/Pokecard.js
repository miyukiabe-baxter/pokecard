import React, { Component } from "react";
import "./Pokecard.css";

class Pokecard extends Component {
  render() {
    let { id, name, type, base_experience } = this.props.item;
    let POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
    let padToThree = number =>
      number <= 999 ? `00${number}`.slice(-3) : number;

    let imgSrc = `${POKE_API}${padToThree(id)}.png`;
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{name}</h2>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={name} />
        </div>
        <p className="Pokecard-data">Type: {type}</p>
        <p className="Pokecard-data">EXP: {base_experience}</p>
      </div>
    );
  }
}

export default Pokecard;
