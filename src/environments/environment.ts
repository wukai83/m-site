import { AuthService } from '../app/shared/service/common/auth.service';
import { AuthMockService } from '../app/shared/service/common/auth.mock.service';
import { APP_INITIALIZER } from '@angular/core';
import { configInitializer, Initializer } from '../app/shared/core/initializer';
import { LoggerService } from '../app/shared/service/common/logger.service';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // api_server: 'http://localhost:3000/',
  // authService: { provide: AuthService, useClass: AuthMockService },
  // loggerService: { provide: LoggerService, useFactory: () => new LoggerService(this.production) },
};
