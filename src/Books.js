import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'

class Books extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books        
                }))
            })
    }
    
    render() {
        return ( 
            <ol>
                {this.state.books.map((book) => 
                    <li key={book.id}>
                        <div 
                            className="book-cover" 
                            style={{ 
                                width: 128, 
                                height: 192, 
                                backgroundImage: `url(${book.imageLinks.thumbnail})` }
                                }>
                        </div>
                        <div>
                            <p>{book.title}</p>
                            <p>{book.authors}</p>
                        </div>
                    </li>
            )}
            </ol>
        )
    }
}

export default Books;