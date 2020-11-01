import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApplianceCartService } from '../appliance-cart.service';
import { Appliance } from '../list-appliance/appliance';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.css']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

   @Input()
  quantity : number;
  @Input()
  max: number;
@Output()
quantityChange :EventEmitter<Number>= new EventEmitter<Number>();
@Output()
maxReachead:EventEmitter<string>= new EventEmitter<string>();
  ngOnInit(): void {
    
  }
  upQuantity():void{
    if(this.quantity<this.max){
    this.quantity ++;
    this.quantityChange.emit(this.quantity);
  }else{
    this.maxReachead.emit("se alcanzo el max");
  }
}

  
  downQuantity():void{
    if(this.quantity>0){
    this.quantity --;
    this.quantityChange.emit(this.quantity);

  }else{

    this.maxReachead.emit("se alcanzo el max");

  }
}
OnChangeQuantity(event ):void{
  if(event.tarjet.value<0){
    alert("no puede ")
    let aux=event.tarjet.value=this.max;
    this.quantity= aux;
    this.quantityChange.emit(this.quantity);


}
}

}
