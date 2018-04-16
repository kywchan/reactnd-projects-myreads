import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
    render () {
        return (
            <div className="open-search">
                <Link 
                    to='/search'
                    className='open-search'
                    >
                </Link>
            </div>  
        )
    }
}

export default ListBooks;