import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import App from './App'
import TvShows from './components/TvTab/TvShows'
import Header from './components/HeaderTab/Header'

class Routes extends Component{
    render(){
        return(
            <Router>
            <div>
            <Header/>
                <Switch>
               
                <Route exact component={App} path='/'/>
                <Route exact component={TvShows} path='/tvshows'/>
            
                </Switch>
            </div>
            </Router>
        )
    }
}

export default Routes