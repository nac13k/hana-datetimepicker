import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  templateUrl: './views/basic.html'
})
export class DatePickerExample implements OnInit {
  date: any = '04-18-1990';
  settings = {
    bigBanner: true,
    timePicker: false,
    format: 'dd-MM-yyyy',
    defaultOpen: true,
    closeOnSelect: false,
    rangepicker: false
  }
  constructor() {

  }
  onDateSelect(date: any){
    console.log(date);
  }
  ngOnInit() {

  }
  title: string = "Basic Example";
}
