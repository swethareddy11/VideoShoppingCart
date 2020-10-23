import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orderflow',
  templateUrl: './orderflow.component.html',
  styleUrls: ['./orderflow.component.css']
})
export class OrderflowComponent implements OnInit {
  @Input() childExample: string;
  @Input() childExample1: string;
  @Input() childExample2: string;
  constructor() { }

  ngOnInit(): void {
  }


}
