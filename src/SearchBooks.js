import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class SearchBooks extends Component {

    state = {
        query:  '',
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
        console.log(query);
      }
    

    render () {

        const { query } = this.state
        const { books } = this.props

        const showingBooks = this.props.updateQuery === ''
            ? books
            : books.filter((b) => (
                b.title.toLowerCase().includes(query.toLowerCase())
            ))

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
                    <ol className="books-grid"></ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks;