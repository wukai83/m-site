import { Http, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

export class BaseService {
    private readonly API_PREFIX = '/api';
    private readonly DEFAULT_VERSION = 'v1';

    constructor(private http: Http) { }

    protected httpGet(uri: string, options?: RequestOptionsArgs): Observable<any> {

        console.log(`get => uri: ${uri}`);

        return this.getObservable(
            this.http.get(uri, options)
        );
    }

    protected httpPost(uri: string, options?: RequestOptionsArgs): Observable<any> {

        console.log(`get => uri: ${uri}`);

        return this.getObservable(
            this.http.post(uri, options)
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
                        if (ret !== 0 && ret !== '0') {
                            ret = ret || {};
                        }
                    } catch (e) {
                        try {
                            ret = res.text();
                        } catch (e) {
                            console.log('no return values');
                        }
                    }
                }

                console.log(`${res.url} => ${JSON.stringify(ret, null, '\t')}`);
                return ret;
            })
            .catch((error: any) => {
                console.error(error);
                throw error;
            });
    }
}
