import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Clothing } from '../clothing.model';
import { ClothingService } from '../clothing.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-clothing-list',
  templateUrl: './clothing-list.component.html',
  styleUrls: ['./clothing-list.component.css']
})
export class ClothingListComponent implements OnInit {
  //  @Output() selectedItem = new EventEmitter<Clothing>();
  // clothing: Clothing[] = [
  //   new Clothing('Test', 'A Test Recipe ', 'https://live.staticflickr.com/416/32636205261_92f619806b_b.jpg'),
  //   new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
  //   new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
  //   new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),
  //   new Clothing('Test2', 'A Test Recipe ', 'https://p1.pxfuel.com/preview/519/531/779/sport-adidas-shirt-street.jpg'),


  // ];
clothing: Clothing[]
  subscription: Subscription;

     constructor(private clothingService: ClothingService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this.subscription = this.clothingService.itemSelected
      .subscribe(
        (clothing: Clothing[]) => {
          this.clothing = clothing;
        }
      );
    this.clothing = this.clothingService.getClothingList();

   }

   onItemSelected(item){
     console.log(item)
    //  this.clothingService.
    //  this.selectedItem.emit();

   }

    onNewClothing() {
      this.router.navigate(['new'], {relativeTo: this.route});
    }
  


}