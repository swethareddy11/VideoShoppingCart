import {Component, HostListener, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public innerHeight: any;
  public innerWidth: any;
  value: false;
  parentExample = 'details';
  parentExample1 = 'order';
  parentExample2 = 'shipping';
  parentExample3 = '40%';
  parentExample4 = '55%';
  showBillingParent: any;
  exampleParent: string;
  exampleParent1: string;
  exampleParent2: string;
  exampleParent3: string;
  // tslint:disable-next-line:typedef use-lifecycle-interface
  public showFirst: boolean;
  public showBilling: boolean;
  public showShipping: boolean;
  public showEnd: boolean;
  // tslint:disable-next-line:typedef
  email: any;
  ngAfterViewInit(){
    this.showBillingParent = false;
  }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth - 20;
    this.innerHeight = window.innerHeight - 20;

  }
  exampleMethodParrent($event){
    this.exampleParent = $event;
    this.showFirst = true;
    this.showBilling = false;
    this.showShipping = false;
    console.log(this.exampleParent);
  }

  exampleMethodParrent1($event){
    this.exampleParent1 = $event;
    this.showFirst = false;
    this.showBilling = true;
    this.showShipping = false;
    this.showEnd = false;
    console.log(this.exampleParent1);
  }

  exampleMethodParrent2($event){
    this.exampleParent2 = $event;
    this.showFirst = false;
    this.showBilling = false;
    this.showShipping = true;
    this.showEnd = false;
    console.log(this.exampleParent2);
  }
  exampleMethodParrent3($event) {
    this.exampleParent3 = $event;
    this.showFirst = false;
    this.showBilling = false;
    this.showShipping = false;
    this.showEnd = true;
    console.log(this.exampleParent3);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.innerWidth = window.innerWidth - 20;
    this.innerHeight = window.innerHeight - 20;
  }
}
