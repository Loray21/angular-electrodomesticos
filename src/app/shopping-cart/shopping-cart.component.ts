import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { ApplianceCartService } from '../appliance-cart.service';
import { Appliance } from '../list-appliance/appliance';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
shopping_cart_list$: Observable<Appliance[]>;
  constructor(private cart: ApplianceCartService) { 
    this.shopping_cart_list$ = this.cart.shopList.asObservable();
  }

  ngOnInit(): void {
  }

}
