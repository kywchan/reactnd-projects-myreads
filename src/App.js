import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf.js'
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

  render() {

    return (
      <div>
        <Route exact path='/search' render={({ history }) => (         
          <p>Hello</p>
        )} />
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div> 
            <Bookshelf heading='Currently Reading' shelf='currentlyReading' books={this.state.books}/>
            <Bookshelf heading='Want to Read' shelf='wantToRead' books={this.state.books}/>
            <Bookshelf heading='Read' shelf='read' books={this.state.books}/>
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
