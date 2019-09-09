import React from 'react';

class Moves extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            move: props.move
        }
    }

    render(){
        return(
            <div className='btn btn-outline-dark m-1 w-100'>
                {this.state.move}
            </div>
        );
    }

}

export default Moves;