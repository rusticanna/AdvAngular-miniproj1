import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favbooks',
  templateUrl: './favbooks.component.html',
  styleUrls: ['./favbooks.component.css']
})
export class FavbooksComponent implements OnInit {

  favBooks = [
    'The Power of One',
    'The Light We Cannot See',
    'Poisonwood Bible'
  ];

  @Output() addBookEvent = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  addBook(book) {
    this.addBookEvent.emit(book);
  }
}
