import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ConfigService } from './shared/service/common/config.service';
import { Initializer, configInitializer } from './shared/core/initializer';
import { AuthService } from './shared/service/common/auth.service';
import { AuthMockService } from './shared/service/common/auth.mock.service';
import { SessionStorageService } from './shared/service/common/sessionStorage.service';
import { LocalStorageService } from './shared/service/common/localStorage.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoggerService } from './shared/service/common/logger.service';
import { AuthGuard } from './shared/core/auth.guard';
import './shared/core/custom-operators';
import { environment } from '../environments/environment';
import { StopPropagationDirective } from './shared/directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StopPropagationDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
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
    AuthGuard,
    environment.authService,
    environment.loggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
