import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StopPropagationDirective } from './stopPropagation.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StopPropagationDirective],
  exports: [StopPropagationDirective]
})
export class StopPropagationModule {}
