import React, { Component } from 'react'
import { Container, Col, Row, Card, Badge } from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowTv extends Component {
    constructor(){
        super()
        this.state = {
            shows: [],
        }
    }

    componentDidMount(){
        const { match } = this.props
        axios.get(`https://api.themoviedb.org/3/tv/${match.params.id}?api_key=d0ff6f9cb6c33dcc6bc0c0a6381f2884&language=en-US`)
        .then(res => {
            const shows = [res.data];
            this.setState({ shows })
        })
    }
    render() {
        const { shows } = this.state
        console.log(shows)
        return (
            <div className="tvshow">
                {
                    shows.map((data, i)=> {
                        return(
                            <div>
                                <img src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`} className="overlay" alt='show'/>
                            <div className="on"></div>
                            <div className="ontop">
                                    <div className="">
                                        <Row>
                                            <Col>
                                            <img src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} className="poster" alt="poster-show"/>
                                            </Col>

                                            <Col md={7}>
                                                <h1>{data.original_name}</h1>
                                                <h6>{data.vote_average}</h6>

                                                <h5>Overview</h5>
                                                <article>{data.overview}</article>
                                            
                                            </Col>
                                        </Row>

                                    </div>
                                      
                                </div>
                            </div>
                        )
                    })
                }

                <div className="bottom">
                    <Row>
                        <Col className="p-5">
                        {
                            shows.map((seas, i)=> {
                                return(
                                    <div>
                                        {
                                            seas.seasons.map((sea, i)=>{
                                                return(
                                                    <Card className="mt-3">
                                                         <Row>
                                                <Col md={4}>
                                                    <Card.Img src={`https://image.tmdb.org/t/p/original/${sea.poster_path}`} alt='card-img' variant="top" />
                                                </Col>

                                                <Col>
                                                    <Card.Body>
                                                        <div className='d-flex flex-column p-4'>
                                                            <h4>
                                                                <Link to={`/tvshows/${sea.id}`}>
                                                            {sea.name}
                                                            </Link>
                                                            </h4>
                                                            <p>Episodes: {sea.episode_count}</p>
                                                            <h6>{sea.overview}</h6>
                                                        </div>

                                                        <Card.Text></Card.Text>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                                    </Card>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                        
                        </Col>

                        <Col md={4}>
                        {
                            shows.map((show, i)=> {
                                return(
                                    <div className="p-3 facts" key={i}>
                                        <h6>Facts</h6>
                                        <h6>Status</h6>
                                        <p>{show.status}</p>


                                        <h6>RunTime</h6>
                                        <p>{show.runtime} minutes</p>

                            

                                        <h6>Genres</h6>
                                       
                                        {show.genres.map(data=>
                                         <div className="m-2">
                                            <Badge variant="dark" key={data.id}>{data.name}</Badge>
                                            </div>
                                            )}

                                            <h6>Networks</h6> 
                                            {
                                                show.networks.map((net,i)=>{
                                                    return(
                                                        <div key={i}>
                                                            <Card.Text>
                                                                {net.name}
                                                            </Card.Text>

                                                            </div>
                                                    )
                                                })
                                            }

                                            <h6>Production Companies</h6>
                                            {
                                                show.production_companies.map(data=>{
                                                    return(
                                                        <div key={data.id}>
                                                    
                                                                <Card.Text>
                                                                {data.name}
                                                                </Card.Text>
                                                           
                                                            </div>
                                                      )
                                                    })
                                                }
                                             <h6>Created By</h6>
                                             {
                                                 show.created_by.map(create=>{
                                                     return(
                                                         <div key={create.id}>
                                                             <Row>
                                                                 <Col md={4} className="mt-2">
                                                                 <img src={`https://image.tmdb.org/t/p/original/${create.profile_path}`} className="profile" alt="profile"/>
                                                                 </Col>
                                                                 <Col>
                                                                 <Card.Text className="mt-4">
                                                                 {create.name}
                                                                 </Card.Text>
                                                                 </Col>
                                                             </Row>
                                                             </div>
                                                     )
                                                 })
                                             }   
                                        
                                    </div>
                                )
                            })
                        }
                        
                        </Col>
                    </Row>
                </div>
               
                
            </div>
        )
    }
}

export default ShowTv
