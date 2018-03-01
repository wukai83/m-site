import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
// import { DebounceClickDirective } from './shared/directive/debounceClick.directive';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './shared/service/common/config.service';
import { Initializer, configInitializer } from './shared/core/initializer';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Initializer,
    ConfigService,
    { provide: APP_INITIALIZER, useFactory: configInitializer, deps: [Initializer], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
