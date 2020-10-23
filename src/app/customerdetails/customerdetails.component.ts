import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  @Output() exampleOutput = new EventEmitter<string>();
  exampleChild2 = 'shipped';
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    phoneno: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    })
  });
  exampleMethodChild2(){
    this.exampleChild2 = this.profileForm.value.email;
    this.exampleOutput.emit(this.exampleChild2);
    console.log(this.profileForm.value.email);
  }

  ngOnInit(): void {
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
