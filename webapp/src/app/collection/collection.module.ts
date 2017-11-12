import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { CollectionListItemComponent } from './collection-list-item/collection-list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CollectionComponent, CollectionListComponent, CollectionListItemComponent]
})
export class CollectionModule { }
