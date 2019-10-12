import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'
import TvShows from './components/TvTab/TvShows'
import Header from './components/HeaderTab/Header'
import ShowMovies from './components/MoviesTab/ShowMovies'
import Footer from './components/HeaderTab/Footer'
import ShowTv from './components/TvTab/ShowTv'

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
                <Route exact component={ShowTv} path='/tvshows/:id'/>
                </Switch>
                <Footer/>
            </div>
            </Router>
        )
    }
}

export default Routes