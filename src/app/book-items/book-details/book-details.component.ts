import { Component, OnInit, ViewChild } from '@angular/core';
import { BooksCollectionService } from '../../../services/books-collection.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @ViewChild('f') detailsForm: NgForm
  bookDetails : any;
  edit:boolean = true;
  selectedBookId: number;
  newDetails = {
    book_id: '',
    name: '', 
    author:'',
    number_of_pages: '', 
    date_of_publication: '' 
  }

  constructor(public booksService: BooksCollectionService) { }

  ngOnInit() {
    this.booksService.bookSelectedEvent
      .subscribe(
        (details) => {
          this.bookDetails = details;
        }
      );
}

  onEdit() {
    this.edit = !this.edit;
  }

  // onSave() {
  //   this.edit = !this.edit;
  // }

  onCancel() {
    this.edit = true;
  }
  
  onSubmit(){
    this.newDetails.book_id = this.bookDetails.book_id;
    this.newDetails.name = this.detailsForm.value.name;
    this.newDetails.author = this.detailsForm.value.author;
    this.newDetails.number_of_pages = this.detailsForm.value.dop;
    this.newDetails.date_of_publication = this.detailsForm.value.nop;
    
    //this.booksService.bookSelectedEvent.emit(this.newDetails);
    this.booksService.onSaveDetails(this.newDetails, +this.bookDetails.book_id);
    this.edit = true;
    this.detailsForm.form.reset();
    console.log('using view child',this.detailsForm);
    console.log('new details',this.newDetails);
    console.log('book id of meeee', this.bookDetails.book_id);
  }
    
  

}
