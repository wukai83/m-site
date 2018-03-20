import { AuthService } from '../app/shared/service/common/auth.service';
import { AuthMockService } from '../app/shared/service/common/auth.mock.service';
import { APP_INITIALIZER } from '@angular/core';
import { configInitializer, Initializer } from '../app/shared/core/initializer';
import { LoggerService } from '../app/shared/service/common/logger.service';

export const environment = {
  production: false,
  api_server: 'http://localhost:3000/',
  authService: { provide: AuthService, useClass: AuthMockService },
  loggerService: { provide: LoggerService, useFactory: () => new LoggerService() },
};
