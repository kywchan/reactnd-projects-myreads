import React, { Component } from 'react'

class Book extends Component {

    render () {

        const { book } = this.props
        // if the book has no shelf, set it to none in display
        if (typeof book.shelf === "undefined") {
            book.shelf = "none"
        }
        
        return (

            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 192,
                            backgroundImage: `url(${(book.imageLinks && book.imageLinks.smallThumbnail) || ""})`
                        }
                        }>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(e) => this.props.handleChange({book: book, value: e.target.value})}>
                            <option value="moveTo" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>

            </div>

        )
    }
}

export default Book;