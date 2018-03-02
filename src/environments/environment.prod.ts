import { AuthService } from '../app/shared/service/common/auth.service';
import { APP_INITIALIZER } from '@angular/core';
import { configInitializer, Initializer } from '../app/shared/core/initializer';

export const environment = {
  production: true,
  authService: { provide: AuthService, useClass: AuthService },
  initializer: { provide: APP_INITIALIZER, useFactory: configInitializer, deps: [Initializer], multi: true },
};
