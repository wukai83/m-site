import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Http } from '@angular/http';

@Injectable()
export class ConfigService {

    constructor(private http: Http) { }

    public getConfig(uri: string) {
        return this.http.get(uri);
    }
}
