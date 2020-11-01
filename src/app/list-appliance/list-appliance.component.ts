import { Component, OnInit } from '@angular/core';
import { eventNames } from 'process';
import { ApplianceCartService } from '../appliance-cart.service';
import { Appliance } from './appliance';

@Component({
  selector: 'app-list-appliance',
  templateUrl: './list-appliance.component.html',
  styleUrls: ['./list-appliance.component.css']
})
export class ListApplianceComponent implements OnInit {

  appliances : Appliance[]=[
    {
    "name":"televisor",
    "price": 300,
    "brand":"sony",
    "promotion":"3 cuotas sin interes",
    "image":"assets/img/tele.png",
     "Stock":4,
     "quantity":0,
  },
  {
    "name":"celular",
    "price": 50000,
    "brand":"motorola",
    "promotion":"12 cuotas sin interes",
    "image":"assets/img/CELULAR.png",
    "Stock":2,
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


  constructor(private cart: ApplianceCartService) {
   }

  ngOnInit(): void {
  }
  addToCart(appliance: Appliance) {
 this.cart.addToCart(appliance);
 appliance.Stock-=appliance.quantity;
 appliance.quantity=0;
  }

  maxReachead(m:string){
    alert(m);

  }
  }

