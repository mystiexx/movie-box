import React, { Component } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import Reviews from './Reviews'
import Similar from './Similar'

class ShowMovies extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            reviews: [],
            similar: []
        }

    }

    componentDidMount(){
        const {match} = this.props
        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/reviews?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&language=en-US&page=1`)
        .then(res=> {
            const reviews = [res.data];
            this.setState({ reviews })
        })

        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/similar?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&language=en-US&page=1`)
        .then(res=> {
            const similar = [res.data];
            this.setState({ similar })
        })
    }

    componentWillUpdate() {
        const { match } = this.props
        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&language=en-US`)
            .then(res => {
                const movies = [res.data];
                this.setState({ movies })
            })
    }
    
    render() {
        const { movies, reviews, similar } = this.state
        console.log(similar)
        return (
            <div className="top">

                <Container className="mt-5 pb-5">
                    <Card className="shadow-sm">
                        {movies.map((movies, i) =>
                            <Row>
                                <Col md={2} key={i}>
                                    <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movies.poster_path}`} className="poster-image" alt="poster" />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <h1>{movies.original_title}</h1>
                                        <h6>Rating: {movies.vote_average}<FaStar /></h6>
                                        <h6>{movies.tagline}</h6>
                                        <Card.Text>
                                            <h6 className="mt-2">Overview</h6>
                                            {movies.overview}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        )}
                    </Card>



                    <Card className="mt-5 shadow">
                        <Row>
                            <Col   className="p-2">
                                {
                                   reviews.map((data, i)=> {
                                       return(
                                           <Reviews data={data.results} key={i}/>
                                       )
                                   })
                                }
                                <div className="similar overflow-auto">
                                    {
                                        similar.map((data,i)=>{
                                            return(
                                                <Similar data={data.results} key={i} />
                                            )
                                        })
                                    }
                                   

                                </div>
                               

                            </Col>

                            <Col className="details" md={2}>
                                {movies.map((data, i) =>
                                    <div className="p-3" key={i}>
                                        <h6>Facts</h6>
                                        <h6>Status</h6>
                                        <p>{data.status}</p>

                                        <h6>RunTime</h6>
                                        <p>{data.runtime} minutes</p>

                                        <h6>Budget</h6>
                                        <p>${data.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>

                                        <h6>Revenue</h6>
                                        <p>${data.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>



                                        <h6>Original Language</h6>
                                        {
                                            data.spoken_languages.map(data =>
                                                <Card.Text key={data.id}>{data.name} </Card.Text>
                                            )}

                                        <h6>Genres</h6>
                                       
                                        {data.genres.map(data=>
                                         <div className="m-2">
                                            <Badge variant="dark" key={data.id}>{data.name}</Badge>
                                            </div>
                                            )}

                                            <h6>Production Companies</h6>
                                            {
                                                data.production_companies.map(data=>{
                                                    return(
                                                        <div key={data.id}>
                                                    
                                                                <Card.Text>
                                                                {data.name}
                                                                </Card.Text>
                                                           
                                                            </div>
                                                    )
                                                })
                                            }
                                            
                                    </div>
                                )}
                            </Col>
                        </Row>

                    </Card>


                </Container>





            </div>
        )
    }
}

export default ShowMovies;