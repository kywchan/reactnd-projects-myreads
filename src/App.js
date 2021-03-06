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
          <SearchBooks 
            books={this.state.books}
            handleChange={this.handleChange}
            updateQuery={this.updateQuery}
          />    
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div> 
            <Bookshelf
              handleChange={this.handleChange}
              heading='Currently Reading' 
              books={this.state.books.filter((val) => { return val.shelf ==='currentlyReading'})}
            />
            <Bookshelf
              handleChange={this.handleChange}
              heading='Want to Read' 
              books={this.state.books.filter((val) => { return val.shelf ==='wantToRead'})}
            />
            <Bookshelf
              handleChange={this.handleChange}
              heading='Read' 
              books={this.state.books.filter((val) => { return val.shelf ==='read'})}
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
