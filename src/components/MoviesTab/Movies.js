import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import MovieCard from './MovieCard'
import axios from 'axios'
import { Form, Spinner } from 'react-bootstrap'

class Movies extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`)
            .then(res => {
                const movies = [res.data];
                this.setState({ movies });
            })
    }

    render() {
        const { movies } = this.state
        return (
            <div className="top">
                {
                    this.state.loading ?
                        <Container className='pb-5 mt-5'>
                            <h4 className="mt-5 pb-3">Discover New Movies & Tv Shows</h4>

                            <Form>
                                <Form.Control type="text" placeholder="Search for movie or tv Show..." />
                            </Form>

                            {
                                movies.map(function (data, i) {
                                    return (
                                        <MovieCard data={data.results} key={i} />

                                    )
                                })
                            }



                        </Container>

                        :
                        <Spinner animation="border" role="status" className="spinner" size="lg" />


                }



            </div>
        )
    }
}

export default Movies;