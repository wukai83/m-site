// tslint:disable-next-line:eofline
import { Observable } from 'rxjs/Observable';

function toJSON<T>(): Observable<T> {
    return this.map((res: Response) => {
        let ret: any = {};
        if (res.status >= 200 && res.status < 300) {
            try {
                ret = res.json();
            } catch (e) {
                ret = res.text();
            }
        }

        return ret;
    }).catch((error: any) => {
        this.logger.error(error);
        throw error;
    });
}

Observable.prototype['toJSON'] = toJSON;
