import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }

    return (
      <div className="Pokedex">
        <h1>Your Total Experience: {this.props.exp}</h1>
        {title}

        <div className="Pokedex-cards">
          {this.props.pokemon.map(eachPoke => (
            <Pokecard item={eachPoke} key={eachPoke.id} />
          ))}
        </div>
      </div>
    );
  }
}
