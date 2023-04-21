import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public Books : string[] = ["Angular : Angular_book", "NodeJS : NodeJS_book", "AI : Artificial Intelligence-guide", "Big Data : Big-Data-book"];
}
