import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'
import TvShows from './components/TvTab/TvShows'
import Header from './components/HeaderTab/Header'
import ShowMovies from './components/MoviesTab/ShowMovies'

class Routes extends Component{
    render(){
        return(
            <Router>
            <div>
            <Header/>
                <Switch>
               
                <Route exact component={App} path='/'/>
                <Route exact component={TvShows} path='/tvshows'/>
                <Route exact component={ShowMovies} path='/movies/:id'/>
            
                </Switch>
            </div>
            </Router>
        )
    }
}

export default Routes