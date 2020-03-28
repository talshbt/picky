import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
import { AngularMaterialModule } from './angular-material.module';


import { FlexLayoutModule } from "@angular/flex-layout";
import { ClothingListComponent } from './clothing/clothing-list/clothing-list.component';
import { ClothingItemComponent } from './clothing/clothing-list/clothing-item/clothing-item.component';
import { ClothingService } from './clothing/clothing.service';
import { AppRoutingModule } from './app-routing.module';
import { AddClothesComponent } from './modals/add-clothes/add-clothes.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, AngularMaterialModule],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, ClothingComponent, ShoppingListComponent, ClothingListComponent, ClothingItemComponent, AddClothesComponent, PlaceholderDirective],
  bootstrap:    [ AppComponent ],
  providers: [ClothingService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  entryComponents:[
    AddClothesComponent

  ]
})
export class AppModule { }
