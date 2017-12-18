import { Component, OnInit } from '@angular/core';
import { BooksCollectionService } from '../../services/books-collection.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-book-items',
  templateUrl: './book-items.component.html',
  styleUrls: ['./book-items.component.css']
  //providers: [BooksCollectionService]
})
export class BookItemsComponent implements OnInit {

  constructor(public booksService: BooksCollectionService,
              private router: Router) { }
  
  AllBooks: any; 
  selectedBook = {};
  selectedBookId;
  ngOnInit() {
    this.AllBooks = this.booksService.getBooks();
    // this.booksService.bookSelectedEvent
    //   .subscribe(
    //     (newBookList) => {
    //       this.AllBooks = newBookList;
    //     }
    //   ) 
  }

  GetBookDetails(bookId) {
    this.selectedBookId = +bookId.innerHTML-1;
    console.log('typeof', typeof(this.selectedBookId), this.selectedBookId);
    let book_id: number; let name = ''; let author = ''; 
    let no_of_pages = ''; let dateOfPub = '';
    this.selectedBook = {
       book_id : this.AllBooks[this.selectedBookId].book_id,
       name: this.AllBooks[this.selectedBookId].name,
       author: this.AllBooks[this.selectedBookId].author,
       number_of_pages: this.AllBooks[this.selectedBookId].number_of_pages,
       date_of_publication: this.AllBooks[this.selectedBookId].date_of_publication
    }
    //this.booksService.onGetBookDetails(index);
    this.booksService.bookSelectedEvent.emit(this.selectedBook)
    this.router.navigate(['book-details']); 
  }

  
  }


