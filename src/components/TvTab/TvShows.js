import React, {Component} from 'react'
import axios from 'axios'
import { Container, Form } from 'react-bootstrap'
import ShowCard from './ShowCard'

class TvShows extends Component{
    constructor(){
        super()
        this.state = {
            shows: [],
        }
    }
    componentDidMount(){
        axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&language=en-US`)
        .then(res => {
          const shows = [res.data];
          this.setState({ shows });
        })

    }

    render(){
        const { shows } = this.state
        console.log(shows)
        return(
            <div className="top">
                <Container className="pb-5">

                <h4 className="mt-5 pb-3">Popular Tv Shows</h4>

                <Form>
                    <Form.Control type="text" placeholder="Search for movie or tv Show..."/>
                </Form>
                    {
                        shows.map((data,i)=>{
                            return(
                                <ShowCard data={data.results} key={i}/>
                            )
                        }
                        
                        )
                    }
                </Container>

            </div>
        )
    }
}

export default TvShows;