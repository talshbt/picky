import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ClothingListComponent } from './clothing/clothing-list/clothing-list.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, ClothingComponent, ShoppingListComponent, ClothingListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
