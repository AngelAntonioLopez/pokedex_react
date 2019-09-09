import React from 'react';
import './App.css';
import Primerapagina from './components/Primerapagina';
import PokeDescripcion from './components/PokeDescripcion';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

function App( ) {
    return (
      <Router>
        <React.Fragment>
          <Link to='/lista'>Ir a la Lista</Link>
          <Route path='/lista' component={Primerapagina}/>
          <Route path='/:id' component={pokemonredirection}/>
        </React.Fragment>
      </Router>
    );
}

function pokemonredirection({match}){
return(
  <PokeDescripcion key={match} pokemon={match}/>
);

}


export default App;
