import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  selectedExpress: string = '';
  selectedRole: string = '';

  express = [
    { value: 'flash', viewValue: 'Flash Express' },
    { value: 'kerry', viewValue: 'Kerry Express' },
    { value: 'thai-post', viewValue: 'Thai Post' },
    { value: 'best', viewValue: 'Best Express' },
    { value: 'jnt', viewValue: 'J&T Express' },
  ];

  roles = [
    { value: 'security', viewValue: 'ยาม' },
    { value: 'transport', viewValue: 'พนักงานส่งของ' },
  ];

  save(): void {
    console.log(this.selectedRole, this.selectedExpress);
  }
}
