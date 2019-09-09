import React from 'react';
import Axios from 'axios';
import PokeCard from './PokeCard';


class PrimeraPagina extends React.Component {


    constructor( props ) {
        super( props );
        this.state = {
            counter: 0
            , pokemons: [ ]
            , loading: false
        }
    }

    async componentDidMount( ) {
        await Axios.get( 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100' )
            .then( response => {
                this.setState( {
                    pokemons: response.data.results
                } )
            } )
            .catch( ( error ) => {
                console.log( 'ayudaaaaaaaaaaaaaaaaaaaaaaa' + error );
            } )
    }

    render( ) {
        return (
                    <div className='container'>
                        <div className='row'>    
                                {this.state.pokemons.map(pokemon =>
                                    <PokeCard key={pokemon.nombre} nombre={pokemon.name} url={pokemon.url}/>
                                )} 
                        </div>    
                    </div>
        );

    }
}

export default PrimeraPagina;
