import React from 'react';
import Axios from 'axios';
import Moves from './Moves';
import Tipos from './Tipos';
import  Habilidades from './Habilidades';
import './estilo.css';


class PokeDescripcion extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            name: props.pokemon.params.id,
            pokemon: [],
            pokeimg: '',
            moves: [],
            types:[],
            habilidades:[]
        }
    }

    async componentDidMount(){
        console.log(this.state.name);
        await Axios.get('https://pokeapi.co/api/v2/pokemon/'+this.state.name)
            .then(response =>{
                this.setState({
                    pokemon: response.data,
                    pokeimg: response.data.sprites.front_default,
                    types: response.data.types,
                    moves: response.data.moves,
                    habilidades: response.data.abilities
                })
            })
            .catch( ( error ) => {
                console.log( 'ayudaaaaaaaaaaaaaaaaaaaaaaa' + error );
            } )

            console.log(this.state.pokemon);
    }


    render(){
        return(
            <div className='container fondo w-100'>
                <div className='row'>
                    <div className='col-6 mx-auto'>
                        <center>
                            <div className='card w-100 p-1'>
                            <img src={this.state.pokeimg} className='card-img-top img-thumbnail mx-auto w-75' alt={this.state.name}/>
                            <div className='card-body'>
                                <h3 className='card-title'>
                                    {this.state.name}
                                </h3>
                                <div>
                                <b> Altura:</b> {this.state.pokemon.height} m
                                </div>
                                <div>
                                <b> Peso: </b>{this.state.pokemon.weight} Kg
                                </div>
                                
                                </div>
                            </div>
                        </center>
                    </div>
                    <div className='col-6 mx-auto'>
                        <div>
                            <div>
                                <h2>Tipo</h2>
                                <div className="row">
                                    {this.state.types.map( type =>
                                        <div className='col-4 mx-auto'>
                                            <Tipos key={type.type.name} tipo={type.type.name}/>
                                        </div>    
                                    )}
                                </div>
                            </div>
                            <div>
                                <h2>habilidades</h2>
                                <div className="row">
                                    {this.state.habilidades.map( habilidad =>
                                        <div className='col-6 mx-auto'>
                                            <Habilidades key={habilidad.ability.name} habilidad={habilidad.ability.name}/>
                                        </div>    
                                    )}
                                </div>
                            </div>
                            <div>
                                <h2>Movimientos</h2>
                                <div className="row">
                                    {this.state.moves.map( move =>
                                    <div className='col-3 mx-auto'>
                                        <Moves key={move.move.name} move={move.move.name}/>
                                    </div>    
                                    )}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PokeDescripcion;