import { FormsModule } from '@angular/forms';
import { DatePickerExample } from './examples/datepicker';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateTimePickerExample } from './examples/datetimepicker';
import { SimpleDatePickerExample } from './examples/simpledatepicker';
import { UsingWithFormExample } from './examples/usingWithForms';
import { DateRangePickerExample } from './examples/rangepicker';
import { HanaDatetimepickerModule } from 'hana-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerExample,
    DatePickerExample,
    DateTimePickerExample,
    SimpleDatePickerExample,
    UsingWithFormExample,
    DateRangePickerExample
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HanaDatetimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// declarations: [
//   AppComponent,
//   AdsenseComponent,
//   DatePickerExample,
//   DateTimePickerExample,
//   SimpleDatePickerExample,
//   UsingWithFormExample,
//   DateRangePickerExample
// ],
// imports: [
//   AngularDateTimePickerModule,
//   BrowserModule,
//   FormsModule,
//   AppRouterModule],
// providers: [],
// bootstrap: [AppComponent]