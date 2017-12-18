import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BooksCollectionService } from '../services/books-collection.service';
import { BookItemsComponent } from './book-items/book-items.component';
import { BookDetailsComponent } from './book-items/book-details/book-details.component';

const mainRoutes: Routes = [
  {path: '', component: BookItemsComponent},
  {path: 'books', component: BookItemsComponent},
  {path: 'book-details', component: BookDetailsComponent} 
]

@NgModule({
  declarations: [
    AppComponent,
    BookItemsComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(mainRoutes)
  ],
  providers: [BooksCollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
