import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { StopPropagationDirective } from '../shared/directive/stopPropagation.directive';
import { SharedModule } from '../shared/core/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [MainComponent, StopPropagationDirective]
})
export class MainModule {
}
