import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  template: `
            <datetimepicker [(ngModel)]="date" name="date" ngDefaultControl [settings]="settings"></datetimepicker>
  `
})
export class SimpleDatePickerExample implements OnInit {
  date: Date = new Date();
  settings = {
        bigBanner: false,
        timePicker: false,
        format: 'dd-MM-yyyy',
        defaultOpen: true
    }
  constructor(){
    
  }    
   ngOnInit(){

   }
}
