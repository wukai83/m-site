import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { LoggerService } from './common/logger.service';
import { BaseModel } from '../model/base.model';
import { CommonUtils } from '../core/common.utils';

@Injectable()
export class BaseService {
    constructor(private http: Http, private logger: LoggerService) { }

    protected httpGet(uri: string, model: BaseModel, options?: RequestOptionsArgs): Observable<any> {
        uri += this.getQueryString(model);
        this.logger.log(`get => uri: ${uri}`);

        return this.getObservable(
            this.http.get(uri, options)
        );
    }

    protected httpPost(uri: string, model: BaseModel, options?: RequestOptionsArgs): Observable<any> {

        this.logger.log(`get => uri: ${uri}`);

        return this.getObservable(
            this.http.post(uri, model, options)
        );
    }

    private getApiURI(uri: string, version: string): string {
        return `${version}${uri}`;
    }

    private getObservable(o: Observable<Response>): Observable<any> {
        return o
            .map((res: Response) => {
                let ret: any = {};
                if (res.status >= 200 && res.status < 300) {
                    try {
                        ret = res.json();
                    } catch (e) {
                        ret = res.text();
                        this.logger.log('return values is not a string of json format.');
                    }
                }

                this.logger.log(`${res.url} => ${JSON.stringify(ret, null, '\t')}`);
                return ret;
            })
            .catch((error: any) => {
                this.logger.error(error);
                throw error;
            });
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
