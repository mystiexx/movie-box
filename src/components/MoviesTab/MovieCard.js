import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class MovieCard extends Component {
    constructor() {
        super()
        this.state = {
            movie: [],
        }


    }

    componentDidMount() {
        const { data } = this.props
        this.setState({ movie: data })
    }
    render() {
        const { movie } = this.state
        return (
            <div>
                <Row>

                    {
                        movie.map((data, i) => {
                            return (
                                <Col md={6} key={i}>
                                    <CardGroup className='' key={i}>
                                        <Card key={i} className='movie-card mt-3 mb-5 shadow-sm'>
                                            <Row>
                                                <Col md={4}>
                                                    <Card.Img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${data.poster_path}`} alt='card-img' variant="top" />
                                                </Col>

                                                <Col>
                                                    <Card.Body>
                                                        <div className='d-flex flex-column'>
                                                            <h4>
                                                                <Link to={`/movies/${data.id}`}>
                                                            {data.original_title}
                                                            </Link>
                                                            </h4>
                                                            <h6>{data.release_date}</h6>
                                                        </div>

                                                        <Card.Text>{data.overview.substring(0, 150)}</Card.Text>
                                                    </Card.Body>
                                                </Col>
                                            </Row>

                                        </Card>
                                    </CardGroup>
                                </Col>
                            )
                        })
                    }


                </Row>

            </div>
        )
    }
}

export default MovieCard