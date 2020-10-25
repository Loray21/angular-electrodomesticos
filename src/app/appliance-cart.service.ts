import { Injectable } from '@angular/core';
import { Appliance } from './list-appliance/appliance';

@Injectable({
  providedIn: 'root'
})

/*maneja toda la logica del carrito*/
export class ApplianceCartService {

  constructor() { }
shopList:Appliance[]=[];

  addToCart(appliance: Appliance) {
     let item=this.shopList.find((v1)=>v1.name==appliance.name);
     if(!item){
     /*clono el appliance cuando agrego*/
    this.shopList.push({ ... appliance});
    console.log(this.shopList);
  }else{
    item.quantity+=appliance.quantity;
  }
}
}

