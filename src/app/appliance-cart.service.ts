import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appliance } from './list-appliance/appliance';

@Injectable({
  providedIn: 'root'
})

/*maneja toda la logica del carrito*/
export class ApplianceCartService {

  constructor() { }
  //convetimos la shopLiost en observable para poder saber cuando cambia los productos y actualizarlo en otrois compontentes
  //varibale observada private con un _ convencion
  private _shopList: Appliance[]=[];
shopList:BehaviorSubject<Appliance[]>= new BehaviorSubject(this._shopList);


  addToCart(appliance: Appliance) {
     let item=this._shopList.find((v1)=>v1.name==appliance.name);
     if(!item){
     /*clono el appliance cuando agrego*/
    this._shopList.push({ ... appliance});
    console.log(this.shopList);
  }else{
    item.quantity+=appliance.quantity;
  }
  this.shopList.next(this._shopList); //erquivale a event emmiter, notifica un cambio
}
}

