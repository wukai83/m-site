import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { SharedModule } from '../shared/core/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    HeaderComponent,
    MainComponent
  ]
})
export class MainModule {
}
