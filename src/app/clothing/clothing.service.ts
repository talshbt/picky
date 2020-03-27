import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Clothing } from './clothing.model';

@Injectable()
export class ClothingService {
  clothingArrayChanged = new Subject<Clothing[]>();
  itemSelected = new Subject<any>()

    clothing: Clothing[] = [
    new Clothing('Test', 'A Test Recipe ', 'https://live.staticflickr.com/416/32636205261_92f619806b_b.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),

   

  ];


  getClothingItem(index: number){
      return this.clothing[index];
  }

  getClothingList(){
    return this.clothing.slice();
  }

  sendClothingItem(){
    

  }

   getRecipe(index: number) {
  
  }

  constructor() { }

}