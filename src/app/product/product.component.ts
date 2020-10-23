import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ProductserviceService} from '../productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public innerHeight: any;
  public innerWidth: any;
  build: any;
  constructor(private buildserv: ProductserviceService) {
  }
  tabs = ['Product-1'];
  selected = new FormControl(0);
  disableSelect = new FormControl(false);
  addTab() {
    this.tabs.push('Product-' + (this.tabs.length + 1));

  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.build = this.buildserv.getBuildData();
    console.log(this.build[0].productId);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

}
