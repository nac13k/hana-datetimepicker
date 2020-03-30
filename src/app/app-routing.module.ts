import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatePickerExample } from './examples/datepicker';
import { DateTimePickerExample } from './examples/datetimepicker';
import { SimpleDatePickerExample } from './examples/simpledatepicker';
import { UsingWithFormExample } from './examples/usingWithForms';
import { DateRangePickerExample } from './examples/rangepicker';


const appRoutes: Routes = [
  { path: '', redirectTo: '/datepicker', pathMatch: 'full'},
  { path: 'datepicker', component: DatePickerExample},
  { path: 'datetimepicker', component: DateTimePickerExample},
  { path: 'simpledatepicker', component: SimpleDatePickerExample},
  { path: 'usinginform', component: UsingWithFormExample},
  { path: 'rangepicker', component: DateRangePickerExample}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
