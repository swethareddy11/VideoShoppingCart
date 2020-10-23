import {Component, OnInit, EventEmitter, Output} from '@angular/core';
enum CheckBoxType { COD, ONLINEBANKING, PICKUP, NONE }
@Component({
  selector: 'app-shippingdetails',
  templateUrl: './shippingdetails.component.html',
  styleUrls: ['./shippingdetails.component.css']
})
export class ShippingdetailsComponent implements OnInit {


  @Output() exampleOutput = new EventEmitter<string>();
  exampleChild3 = 'end';
  constructor() { }
  // tslint:disable-next-line:variable-name
  check_box_type = CheckBoxType;

  currentlyChecked: CheckBoxType;
  public clicked: boolean;

  ngOnInit(): void {
  }

  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if (this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }
    if (targetType === CheckBoxType.PICKUP){
      this.clicked = true;
    }else{
      this.clicked = false;
    }

    this.currentlyChecked = targetType;
  }


  exampleMethodChild3() {
    this.exampleOutput.emit(this.exampleChild3);
    console.log(this.exampleChild3);
  }

}
