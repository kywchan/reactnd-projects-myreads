import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf.js'
import SearchBooks from './SearchBooks.js'
import * as BooksAPI from './BooksAPI.js'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
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

  updateShelf = (book, shelf) => {
    // we're just gonna delete and add the object, instead of finding the index and updating the object.
    const removed = this.state.books.filter((b) => {
      return b.id !== book.id
    })
    // instead of this set, we can set in child and pass the book back)
    book.shelf = shelf

    const added = removed.concat(book)
    this.setState((currentState) => ({
      books: added
    }))
    BooksAPI.update(book, shelf)
  }

  handleChange = (e) => {
    this.updateShelf(e.book,e.value)
  }

  render() {

    return (
      <div>
        <Route exact path='/search' render={({ history }) => (         
          <SearchBooks />    
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div> 
            <Bookshelf
              handleChange={this.handleChange}
              heading='Currently Reading' 
              shelf='currentlyReading' 
              books={this.state.books}
            />
            <Bookshelf
              handleChange={this.handleChange}
              heading='Want to Read' 
              shelf='wantToRead' 
              books={this.state.books}
            />
            <Bookshelf
              handleChange={this.handleChange}
              heading='Read' 
              shelf='read' 
              books={this.state.books}
            />
            <div className="open-search">
              <Link
                to='/search'
                className='open-search'
              >
              </Link>
            </div> 
          </div>
        )} />
      </div>    
    )
  }
}

export default BooksApp
