import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'shared/models/item.model';

@Component({
  selector: 'collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {
  @Input() list: Array<Item>;

  constructor() { }

  ngOnInit() {
  }

}
