import React, { Component } from 'react';

import './Pokecard.css';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);

class Pokecard extends Component {
    render() {
        const props = this.props;
        const imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
      return(
      
        <div className="Pokecard text-center" >
            <h1 className="Pokecard-title">{props.name}</h1>
          <div className="Pokecards-img">
              <img className="Pokecard-img" src={imgSrc} alt=""/>
          </div>
          <div>
            <h4 className="Pokecard-data">Exp: {props.exp}</h4>
            <h5 className="Pokecard-data">Type: {props.type}</h5>
          </div>
        </div>
      
      )
    }
  }

  export default Pokecard;