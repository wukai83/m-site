import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebounceClickDirective } from './debounceClick.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DebounceClickDirective
  ],
  exports: [
    DebounceClickDirective
  ]
})
export class DebounceClickDirectiveModule { }
