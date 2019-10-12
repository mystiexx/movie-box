import React, { Component } from 'react';
import Movies from './components/MoviesTab/Movies';
import './App.css'


class App extends Component{
  render(){
    return(
      <div className="mt-5">
        <Movies/>
      </div>
    )
  }
}
 export default App;