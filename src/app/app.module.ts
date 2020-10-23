import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { OrderflowComponent } from './orderflow/orderflow.component';
import { ProductComponent } from './product/product.component';
import { ProductsummaryComponent } from './productsummary/productsummary.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { ShippingdetailsComponent } from './shippingdetails/shippingdetails.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TabModule} from 'angular-tabs-component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderflowComponent,
    ProductComponent,
    ProductsummaryComponent,
    CustomerdetailsComponent,
    ShippingdetailsComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  RouterModule.forRoot([
    {path: '**', component: MainComponent},
    {path: 'Home', component: MainComponent}
  ]),
  ReactiveFormsModule,
  TabModule,
  MatTabsModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  BrowserAnimationsModule,
  FormsModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
