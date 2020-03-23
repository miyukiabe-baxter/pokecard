import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ]
  };

  render() {
    let handOne = [];
    let handTwo = [...this.props.pokemon];

    while (handOne.length < handTwo.length) {
      let randomNum = Math.floor(Math.random() * handTwo.length);
      let pickedPoke = handTwo.splice(randomNum, 1)[0];
      handOne.push(pickedPoke);
    }

    const pointCal = arr => {
      return arr.reduce((total, cur) => {
        return (total += cur.base_experience);
      }, 0);
    };

    let pointOne = pointCal(handOne);
    let pointTwo = pointCal(handTwo);
    //pointOne > pointTwo ? isOneWinner === true : isTwoWinnder === true;

    return (
      <div>
        <Pokedex
          pokemon={handOne}
          exp={pointOne}
          isWinner={pointOne > pointTwo}
        />
        <Pokedex
          pokemon={handTwo}
          exp={pointTwo}
          isWinner={pointTwo > pointOne}
        />
      </div>
    );
  }
}

export default Pokegame;
