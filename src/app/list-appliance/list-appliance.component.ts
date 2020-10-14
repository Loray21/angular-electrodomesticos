import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-appliance',
  templateUrl: './list-appliance.component.html',
  styleUrls: ['./list-appliance.component.css']
})
export class ListApplianceComponent implements OnInit {

  electrodomestico={
    "name":"televisor",
    "price": 300,
    "brand":"sony",
    "promotion":"3 cuotas sin interes",
    "image":"assets/img/tele.png"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
