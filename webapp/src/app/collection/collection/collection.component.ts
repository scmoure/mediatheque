import { Component, OnInit } from '@angular/core';
import { Item } from 'shared/models/item.model';

@Component({
  selector: 'collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  itemList: Array<Item>;

  constructor() { }

  ngOnInit() {
    this.itemList = this.itemListMock();
  }

  itemListMock(): Array<Item> {
    let itemList: Array<Item> = new Array<Item>();
    itemList.push( {
      author : 'Ridley Scott',
      title: 'Blade Runner (Director\'s cut)',
      year: 1992,
      imgSrc: "https://vignette.wikia.nocookie.net/bladerunner/images/e/e0/Blade-runner-directors-cut-poster--large-msg-119325148375.jpg/revision/latest/scale-to-width-down/350?cb=20110425200646"
    });
    itemList.push( {
      author : 'Steven Spielberg',
      title: 'Schindler\'s List',
      year: 1994,
      imgSrc: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg"
    });
    return itemList;
  }
}
