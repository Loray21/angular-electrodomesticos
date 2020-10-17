import { Component, OnInit } from '@angular/core';
import { eventNames } from 'process';
import { Appliance } from './appliance';

@Component({
  selector: 'app-list-appliance',
  templateUrl: './list-appliance.component.html',
  styleUrls: ['./list-appliance.component.css']
})
export class ListApplianceComponent implements OnInit {

  electrodomesticos : Appliance[]=[
    {
    "name":"televisor",
    "price": 300,
    "brand":"sony",
    "promotion":"3 cuotas sin interes",
    "image":"assets/img/tele.png",
     "Stock":1,
     "quantity":0,
  },
  {
    "name":"celular",
    "price": 50000,
    "brand":"motorola",
    "promotion":"12 cuotas sin interes",
    "image":"assets/img/CELULAR.png",
    "Stock":0,
    "quantity":0,
  },
  {
    "name":"PC",
    "price": 300,
    "brand":"LENOVO",
    "promotion":"6 cuotas sin interes",
    "image":"assets/img/LENOVO.png",
    "Stock":10,
    "quantity":0,
  }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(a:Appliance):void{
    if(a.quantity<a.Stock)
    a.quantity ++;
  }

  
  downQuantity(a:Appliance):void{
    if(a.quantity>0){
    a.quantity --;
  }
}
OnChangeQuantity(event , a:Appliance):void{
  if(event.tarjet.value<0){
    let aux=event.tarjet.value*-1;
    a.quantity= aux;

}
}
}
