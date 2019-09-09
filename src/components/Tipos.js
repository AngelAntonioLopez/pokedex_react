import React from 'react';

class Tipos extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            tipo: props.tipo
        }
    }

    render(){
        return(
            <div className='btn btn-dark m-1 w-100'>
                {this.state.tipo}
            </div>
        );
    }

}

export default Tipos;