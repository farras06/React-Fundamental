import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewScreen from './NewScreen'
import TabelFunction from './Table';

function App () {

  let arr =['jakarta' , 'kena', 'corona']

  return (
    <div className="App">

      <h1>Hello world</h1>
      <h2 style={{border: '1px solid red', marginTop: ' 30px'}}> Test</h2>

      {
        arr.map(val =>{
          return (
            <>
              <p>{val}</p>
              <NewScreen />
            </>
          )           
        })
      } 
    <div className='Table'> 
      <TabelFunction />

    </div>
      
    </div>
  );
}

export default App;
