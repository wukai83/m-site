import { AuthService } from '../app/shared/service/common/auth.service';
import { APP_INITIALIZER } from '@angular/core';
import { configInitializer, Initializer } from '../app/shared/core/initializer';
import { LoggerService } from '../app/shared/service/common/logger.service';

export const environment = {
  production: true,
  api_server: 'http://localhost:3000/',
  authService: { provide: AuthService, useClass: AuthService },
  loggerService: { provide: LoggerService, useClass: LoggerService },
};
