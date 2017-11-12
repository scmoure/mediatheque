import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'shared/models/item.model';

@Component({
  selector: 'collection-list-item',
  templateUrl: './collection-list-item.component.html',
  styleUrls: ['./collection-list-item.component.css']
})
export class CollectionListItemComponent implements OnInit {
  @Input() item : Item;

  constructor() { }

  ngOnInit() {
  }

}
