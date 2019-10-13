import React, { Component } from 'react'

class Page extends Component {
    constructor(){
        super()
        this.state ={
            cuurent_page: null,
            per_page: 20,
            total: null,
        }
    }
    render() {
        
        const pageNumbers = [];

        for(let i =1; i<=Math.ceil(totalPosts/posts_perpage); i++){
            pageNumbers.push(i);
        }

        return (
            <div>
                 {
                    pageNumbers.map(number => (
                        <Pagination key={number}>
                            <Pagination.Item onClick={()=> paginate(number)}>
                           {number}
                           </Pagination.Item>
                        </Pagination>
                    ))
                }
                
            </div>
        )
    }
}

export default Page;
