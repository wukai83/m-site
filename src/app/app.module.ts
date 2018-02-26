import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Initializer, configInitializer } from './shared/initializer';
import { ConfigService } from './shared/service/config.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    Initializer,
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: configInitializer, deps: [Initializer], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
