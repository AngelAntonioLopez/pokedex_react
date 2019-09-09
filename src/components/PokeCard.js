import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class PokeCard extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            nombre: props.nombre
            , pokeurl: props.url
            , pokedemas: [ ],
            pokeimg:''
        }
        this.url = '/'+props.nombre;
    }

    
    

    async componentDidMount(){
        await Axios.get(this.state.pokeurl)
            .then(Response => {
                this.setState({
                    pokedemas: Response,
                    pokeimg: Response.data.sprites.front_default
                })
            }).catch((error) => {
                console.log(error);
            }
            )
    }

    

    render(){
        return(
            <Link className='col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4' to={this.url}>
                        <div className="card my-2">
                            <img src={this.state.pokeimg} className="card-img-top rounded" alt={this.state.nombre}/>
                            <div className="card-body">
                                <h5 className="card-title">{this.state.nombre}</h5>
                            </div>
                        </div>
            </Link>    
        );
    }

}
export default PokeCard;
