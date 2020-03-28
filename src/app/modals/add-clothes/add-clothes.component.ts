import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Clothing } from '../../clothing/clothing.model';
import { ClothingService } from '../../clothing/clothing.service';

@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrls: ['./add-clothes.component.scss']
})
export class AddClothesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)  public data: Clothing, private clothingService:ClothingService) {}

    ngOnInit() {
    }

    onNoClick(): void {
    this.dialogRef.close();
  }

}