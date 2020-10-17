import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListApplianceComponent } from './list-appliance/list-appliance.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { ApplainceAboutComponent } from './applaince-about/applaince-about.component';
import { ZoutApplaincesComponent } from './zout-applainces/zout-applainces.component'
@NgModule({
  declarations: [
    AppComponent,
    ListApplianceComponent,
    ShoppingCartComponent,
    ApplainceAboutComponent,
    ZoutApplaincesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
