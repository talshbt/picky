import { Component, OnInit, Input } from '@angular/core';
import { Clothing } from '../../clothing.model';

@Component({
  selector: 'app-clothing-item',
  templateUrl: './clothing-item.component.html',
  styleUrls: ['./clothing-item.component.css']
})
export class ClothingItemComponent implements OnInit {
  @Input()item:Clothing; 
  constructor() { }

  ngOnInit() {
  }

}