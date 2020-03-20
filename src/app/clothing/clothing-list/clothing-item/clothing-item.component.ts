import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Clothing } from '../../clothing.model';

@Component({
  selector: 'app-clothing-item',
  templateUrl: './clothing-item.component.html',
  styleUrls: ['./clothing-item.component.css']
})
export class ClothingItemComponent implements OnInit {

  @Output() itemSelectedEvent= new EventEmitter<void>();
  @Input()item:Clothing; 
  

  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.itemSelectedEvent.emit();
  }

}