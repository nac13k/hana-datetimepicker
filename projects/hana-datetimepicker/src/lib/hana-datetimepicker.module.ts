import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HanaDatetimepickerComponent } from './hana-datetimepicker.component';
import { ClickOutsideDirective } from './directives/click-outside';



@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ClickOutsideDirective, HanaDatetimepickerComponent],
  exports: [HanaDatetimepickerComponent, FormsModule, ClickOutsideDirective]
})
export class HanaDatetimepickerModule { }
