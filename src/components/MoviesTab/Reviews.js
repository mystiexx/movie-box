import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

class Reviews extends Component {
    constructor(){
        super()
        this.state= {
            reviews: [],
        }
    }

    componentDidMount(){
        const { data } = this.props
        this.setState({reviews: data })
    }
    render() {
        const { reviews } = this.state
        return (
            <div className="p-2">
                <h3 className="text-center">Review</h3>
               {
                   reviews.slice(0,1).map((data, i)=> {
                       return(
                           <div key={i} className="p-3 review">
                               
                               <Card.Body>
                               <Card.Title>Author: {data.author}</Card.Title>
                                   <Card.Text>{data.content}</Card.Text>
                               </Card.Body>
                           </div>
                       )
                   })
               }
                
            </div>
        )
    }
}

export default Reviews
