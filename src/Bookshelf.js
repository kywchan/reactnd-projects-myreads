import React, { Component } from 'react'
import Book from './Book.js'

class Bookshelf extends Component {

    render () {

        const { heading, books } = this.props

        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{heading}</h2>
                    </div>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {books.map((book) =>
                                <li key={book.id}>
                                    <Book
                                        handleChange={this.props.handleChange}
                                        onShelfUpdate={this.props.onShelfUpdate} 
                                        book={book}/>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
         )
    }
}

export default Bookshelf;