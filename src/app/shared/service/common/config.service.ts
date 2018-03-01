import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';

@Injectable()
export class ConfigService extends BaseService {

    public getConfig(uri: string) {
        return this.httpGet(uri);
    }
}
