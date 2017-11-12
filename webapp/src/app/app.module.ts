import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CollectionsNavBarComponent } from './collections-nav-bar/collections-nav-bar.component';
import { CollectionModule } from 'app/collection/collection.module';
import { ItemModule } from 'app/item/item.module';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsNavBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CollectionModule,
    ItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
