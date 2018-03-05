import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
// import { DebounceClickDirective } from './shared/directive/debounceClick.directive';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './shared/service/common/config.service';
import { Initializer, configInitializer } from './shared/core/initializer';
import { AuthService } from './shared/service/common/auth.service';
import { AuthMockService } from './shared/service/common/auth.mock.service';
import { environment } from '../environments/environment';
import { SessionStorageService } from './shared/service/common/sessionStorage.service';
import { LocalStorageService } from './shared/service/common/localStorage.service';


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
    ConfigService,
    Initializer,
    {
      provide: APP_INITIALIZER,
      useFactory: configInitializer,
      deps: [Initializer],
      multi: true
    },
    SessionStorageService,
    LocalStorageService,
    environment.authService,
    environment.loggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
