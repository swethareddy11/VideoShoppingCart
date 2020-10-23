import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-productsummary',
  templateUrl: './productsummary.component.html',
  styleUrls: ['./productsummary.component.css']
})
export class ProductsummaryComponent implements OnInit {
  showBilling = true;
  showFirst = false;
  constructor() { }

  // tslint:disable-next-line:ban-types
  @Output() exampleOutput = new EventEmitter<string>();
  exampleChild = 'Hello';
  exampleMethodChild(){
    this.exampleOutput.emit(this.exampleChild);
  }

  change(){
    this.showBilling = false;
    this.showFirst = true;
  }
  ngOnInit(): void {
  }


}
