import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy,
  OnInit
} from "@angular/core";
import { Clothing } from '../clothing.model';
import { ClothingService } from '../clothing.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from "@angular/material";
import { AddClothesComponent } from '../../modals/add-clothes/add-clothes.component';
import { PlaceholderDirective } from "../../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-clothing-list',
  templateUrl: './clothing-list.component.html',
  styleUrls: ['./clothing-list.component.css']
})
export class ClothingListComponent implements OnInit {

clothing: Clothing[]
  subscription: Subscription;
  @ViewChild(PlaceholderDirective, { static: false })
  dialogHost: PlaceholderDirective;
  isOpen = false;
   @ViewChild(PlaceholderDirective, { static: false })
      dialogHost: PlaceholderDirective;

      
     constructor(
      private clothingService: ClothingService,
      private route: ActivatedRoute, 
      private router: Router,
      private compFactoryResolver: ComponentFactoryResolver,
      public dialog: MatDialog) { }
 


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

openDialog(): void {
    this.isOpen = true;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = "700px";
    dialogConfig.width = "600px";
    dialogConfig.hasBackdrop = true;
    dialogConfig.id = "my-modal-component";
    
    dialogConfig.position = {
      top: "0",
      left: "30%",
    };
    dialogConfig.data = {  };

    const dialogRef = this.dialog.open(AddClothesComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.isOpen = false;
    });
  }
  


}