import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { LoggerService } from './common/logger.service';
import { BaseModel } from '../model/base.model';
import { CommonUtils } from '../core/common.utils';
import { environment } from '../../../environments/environment.prod';

@Injectable()
export class BaseService {
    protected readonly API_PREFIX = '/api/v1';

    constructor(private http: Http, private logger: LoggerService) { }

    protected httpGet(uri: string, model?: BaseModel, options?: RequestOptionsArgs): Observable<any> {
        uri = this.getApiURI(uri, this.API_PREFIX);
        if (model) {
            uri += this.getQueryString(model);
        }
        this.logger.log(`get => uri: ${uri}`);
        return this.http.get(uri, options).toJSON();
    }

    protected httpPost(uri: string, model: BaseModel, options?: RequestOptionsArgs): Observable<any> {
        uri = this.getApiURI(uri, this.API_PREFIX);
        this.logger.log(`get => uri: ${uri}`);
        return this.http.post(uri, model, options).toJSON();
    }

    private getApiURI(uri: string, prefix: string): string {
        return `${prefix}${uri}`;
    }

    private getQueryString(model: BaseModel): string {
        let query = '';
        Object.keys(model).forEach(key => {
            const val = model[key];
            if (val !== null && val !== undefined) {
                if (CommonUtils.isObject(val)) {
                    this.getQueryString(val);
                } else {
                    query += `&${key}=${encodeURIComponent(val)}`;
                }
            }
        });
        query = query.slice(1);
        this.logger.log(`query => ${query}`);
        return query;
    }
}
