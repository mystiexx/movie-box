import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class ShowCard extends Component {
    constructor() {
        super()
        this.state = {
            movie: [],
            total: null,
            per_page: null,
            current_page: null,
        }


    }

    componentDidMount() {
        const { data, current_page, per_page, total } = this.props
        this.setState({ movie: data, total:total, current_page: current_page, per_page:per_page })
    }
    render() {
        const { movie, total, per_page, current_page } = this.state
        console.log(total)
        console.log(per_page)
        console.log(current_page)
        return (
            <div>
                <Row>

                    {
                        movie.map((data, i) => {
                            return (
                                <Col md={6} key={i}>
                                    <CardGroup className='' key={i}>
                                        <Card border='light' key={i} className='movie-card mt-3 mb-5 shadow-sm'>
                                            <Row>
                                                <Col md={4}>
                                                    <Card.Img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt='card-img' variant="top" />
                                                </Col>

                                                <Col>
                                                    <Card.Body>
                                                        <div className='d-flex flex-column'>
                                                            <h4>
                                                            <Link to={`/tvshows/${data.id}`}>
                                                            {data.original_name} </Link>
                                                            </h4>
                                                            <h6>{data.first_air_date}</h6>
                                                        </div>

                                                        <Card.Text>{data.overview.substring(0, 150)}...</Card.Text>
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

export default ShowCard