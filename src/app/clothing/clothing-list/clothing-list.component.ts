import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Clothing } from '../clothing.model';
import { ClothingService } from '../clothing.service';

@Component({
  selector: 'app-clothing-list',
  templateUrl: './clothing-list.component.html',
  styleUrls: ['./clothing-list.component.css']
})
export class ClothingListComponent implements OnInit {
  @Output() selectedItem = new EventEmitter<Clothing>();
  clothing: Clothing[] = [
    new Clothing('Test', 'A Test Recipe ', 'https://live.staticflickr.com/416/32636205261_92f619806b_b.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
      new Clothing('Test', 'A Test Recipe ', 'https://live.staticflickr.com/416/32636205261_92f619806b_b.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
      new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
    new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
        new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg')

  ];


     constructor(private clothingService: ClothingService) { }

    ngOnInit() {
   }

   onItemSelected(item){
     console.log(item)
     this.selectedItem.emit();

   }

}