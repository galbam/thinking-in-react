import React, { Component } from 'react';
import BookList from './BookList';
import BookFilter from './BookFilter';
import books from '../mocks/books'

class Books extends Component {

     state = {
          books: books,
          selectedFilter: 'All',
     }

     selectFilter = filter => {
          this.setState({
               selectedFilter: filter,
               books:
                    filter === 'All'
                         ? books
                         : books.filter(book => book.category === filter)
          })
     }

     render() {
          return (
               <section id="books">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-12 text-center">
                                   <h2>Books</h2>
                                   <hr className="star-primary" />
                              </div>
                         </div>

                         <BookFilter selectedFilter={this.state.selectedFilter} selectFilter={this.selectFilter} />

                         <BookList books={this.state.books} />

                    </div>
               </section>
          )
     }
}

export default Books;
