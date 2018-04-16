import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI.js'
import { Link } from 'react-router-dom'

class ListBooks extends Component {

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

    render () {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                        </div>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.books.map((book) => 
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top"> 
                                            <div 
                                                className="book-cover" 
                                                style={{ 
                                                    width: 128, 
                                                    height: 192, 
                                                    backgroundImage: `url(${book.imageLinks.thumbnail})` }
                                                }>
                                            </div>
                                            <div className="book-shelf-changer">
                                                <select>
                                                    <option value="none" disabled>Move to...</option>
                                                    <option value="currentlyReading">Currently Reading</option>
                                                    <option value="wantToRead">Want to Read</option>
                                                    <option value="read">Read</option>
                                                    <option value="none">None</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.authors}</div>
                                        <div className="book-authors">{book.shelf}</div>

                                    </div>
                                </li>
                            )}
                        </ol>
                    </div>
                <div className="open-search">
                    <Link 
                        to='/search'
                        className='open-search'
                    >
                    </Link>
                </div> 
            </div>
            </div>
            </div>
        )
    }
}

export default ListBooks;