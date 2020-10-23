import {Component, HostListener, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  public innerHeight: any;
  public innerWidth: any;
  showBilling: any;
  showFirst: any;
  @Input() childExample3: string;
  @Output() exampleOutput1 = new EventEmitter<string>();
  exampleChild1 = 'Hello';
  exampleMethodChild1(){
    this.exampleOutput1.emit(this.exampleChild1);
  }
  change2() {
    this.showBilling = true;
    this.showFirst = false;
    console.log('hii');
    console.log(this.showFirst);
    console.log(this.showBilling);
  }


  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    console.log(this.childExample3);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    console.log(this.innerHeight);
    console.log(this.innerWidth);
  }

}
