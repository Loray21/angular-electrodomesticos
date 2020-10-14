import { Component, OnInit } from '@angular/core';
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
     "Stock":1
  },
  {
    "name":"celular",
    "price": 50000,
    "brand":"motorola",
    "promotion":"12 cuotas sin interes",
    "image":"assets/img/CELULAR.png",
    "Stock":0
  },
  {
    "name":"PC",
    "price": 300,
    "brand":"LENOVO",
    "promotion":"6 cuotas sin interes",
    "image":"assets/img/LENOVO.png",
    "Stock":1
  }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
