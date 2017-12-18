import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class BooksCollectionService {
  selectedBook: any;
  bookSelectedEvent = new EventEmitter<{}>();
  //bookSelectedIdEvent = new EventEmitter<number>();
  
  constructor() { }

  books = [{book_id: 0, name: 'Database', author:'abc', 
  number_of_pages:100, date_of_publication: '22-10-2016' },
  {book_id: 1, name: 'C++', author:'abc', number_of_pages:200, 
  date_of_publication: '22-10-2016' },
  {book_id: 2, name: 'OOPs', author:'abc',number_of_pages:300, 
  date_of_publication: '22-10-2016' },
  {book_id: 3, name: 'Management', author:'abc',number_of_pages:410, 
  date_of_publication: '22-10-2016' },
  {book_id: 4, name: 'Physic', author:'abc',number_of_pages:230, 
  date_of_publication: '22-10-2016' },
  {book_id: 5, name: 'Mathematics', author:'abc',number_of_pages:100, 
  date_of_publication: '22-10-2016' },
  {book_id: 6, name: 'Biology', author:'abc',number_of_pages:100, 
  date_of_publication: '22-10-2016' },
  {book_id: 7, name: 'Laws', author:'abc',number_of_pages:100, 
  date_of_publication: '22-10-2016' },
  {book_id: 8, name: 'Graphic', author:'abc',number_of_pages:100, 
  date_of_publication: '22-10-2016' },
  {book_id: 9, name: 'Database', author:'abc',number_of_pages:100, 
  date_of_publication: '22-10-2016' },
  {book_id: 10, name: 'Relational Database', author:'abc',number_of_pages:100, 
  date_of_publication: '22-10-2016' },
  {book_id: 11, name: 'Pixels', author:'abc',number_of_pages:100, 
  date_of_publication: '22-10-2016' },
  {book_id: 12, name: 'Additional', author:'abc',number_of_pages:100, 
  date_of_publication: '22-10-2016' },
  {book_id: 13, name: 'English', author:'abc',number_of_pages:100, 
  date_of_publication: '22-10-2016' }
  ];

  getBooks() {
    return this.books;
  }

  onSaveDetails(newBookDetails, id) {
    this.books[id].name = newBookDetails.name;
    this.books[id].author = newBookDetails.author;
    this.books[id].date_of_publication = newBookDetails.date_of_publication;
    this.books[id].number_of_pages = newBookDetails.number_of_pages;
    //this.bookSelectedEvent.emit(this.books.slice());
    console.log('from service', newBookDetails.book_id, typeof(newBookDetails.book_id))
  }
//   onGetBookDetails(index) {
//     let name = ''; let author = ''; 
//     let no_of_pages = ''; let dateOfPub = '';
//     this.selectedBook = {
//        name: this.books[index].name,
//        author: this.books[index].author,
//        number_of_pages: this.books[index].number_of_pages,
//        date_of_publication: this.books[index].date_of_publication
//     }

//     this.bookSelectedEvent.emit(this.selectedBook);

//     console.log(this.selectedBook);
// }

}