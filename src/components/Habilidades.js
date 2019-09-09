import React from 'react';

class Habilidades extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            habilidad: props.habilidad
        }
    }

    render(){
        return(
            <div className='btn btn-info m-1 w-100'>
                {this.state.habilidad}
            </div>
        );
    }

}

export default Habilidades;