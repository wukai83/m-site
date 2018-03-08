import { AuthService } from '../app/shared/service/common/auth.service';
import { APP_INITIALIZER } from '@angular/core';
import { configInitializer, Initializer } from '../app/shared/core/initializer';
import { LoggerService } from '../app/shared/service/common/logger.service';

export const environment = {
  production: true,
  authService: { provide: AuthService, useClass: AuthService },
  loggerService: { provide: LoggerService, useFactory: () => new LoggerService(this.production) },
};
