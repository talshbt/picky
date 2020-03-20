import { Component, OnInit } from '@angular/core';
import { Clothing } from './clothing.model';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  selectedItem: Clothing;
  constructor() { }

  ngOnInit() {
  }

}