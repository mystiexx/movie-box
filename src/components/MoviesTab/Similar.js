import React, { Component } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Similar extends Component {
    constructor(){
        super()
        this.state = {
            similar: [],
        }
    }

    componentDidMount(){
        const { data } = this.props
        this.setState({ similar: data})
    }
    render() {
        const { similar } = this.state
        console.log(similar)
        return (
            <div>
                <div className="similar p-4 d-flex justify-content-center">
                    <Row>
                    {
                        similar.slice(0,3).map((data,i)=> {
                            return(
                                <div>
                                    <Col md={12}>
                                    <Card>
                                        <Card.Img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${data.poster_path}`} variant="top"  alt="similar" />
                                        <Card.Body>
                                            <Card.Title>
                                                <Link to = {`/movies/${data.id}`} >
                                                 {data.title} 
                                                  </Link>
                                                 </Card.Title>
                                        </Card.Body>
                                    </Card>
                                    </Col>
                                    </div>
                            )
                        })
                    }
</Row>
                </div>
                
            </div>
        )
    }
}

export default Similar;
