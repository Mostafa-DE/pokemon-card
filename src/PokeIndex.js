import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './PokeIndex.css';

class PokeIndex extends Component {

    render() {
        const props = this.props;

            return(
                <div>
                    
                    {/* <h1 className="text-center">Pokemon Cards :) </h1> */}
                    <h5 className="exp-PokeIndex mt-4">Total Experience: {props.exp} </h5>
                    <h3 className= { props.isWinner ? 'Winner' : 'Loser' } >{
                        props.isWinner ? '#The Winner Collection 🙂 '
                        : '#The Loser Collection 🙁  '} 
                    </h3>
                    
                 <div className="pokeIndex-cards mb-5">
                    {props.pokemon.map((p) => (
                       <Pokecard 
                       id={p.id} name={p.name} type={p.type} exp={p.base_experience}
                       />
                    ))}
                 </div>
                </div> 
              )
        

    }
  }

  export default PokeIndex;