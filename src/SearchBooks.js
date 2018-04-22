import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI.js'
import Bookshelf from './Bookshelf.js'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

    state = {
        result: [],
        query:  ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
        if (query === '') {
            this.setState(() => ({
                result: []
            }))
        }
        else this.bookSearch(query)
      }
    
    bookSearch(query) {
        BooksAPI.search(query)
            .then((results) => {
                this.props.books.forEach(element => {
                    results.forEach(elementRes => {
                        if (element.id === elementRes.id) elementRes.shelf = element.shelf
                    })
                })
                this.setState(() => ({
                    result: results
                }))
            }).catch (e => {
                this.setState(() => ({
                    result: []
                }))
            })
    }
    
    render () {

        let { query } = this.state

        return (
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search by title or author"
                                value={query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="search-books-results">
                    <Bookshelf
                        handleChange={this.props.handleChange}
                        books={this.state.result}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks;