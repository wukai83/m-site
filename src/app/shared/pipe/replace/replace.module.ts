import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplacePipe } from './replace.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReplacePipe],
  exports: [ReplacePipe]
})
export class ReplacePipeModule {}
