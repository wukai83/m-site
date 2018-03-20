import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    private _enable = false;

    // constructor(enable = false) {
    //     this._enable = enable;
    // }

    public log(message: string) {
        if (this._enable) {
            console.log(message);
        }
    }

    public error(message: string) {
        if (this._enable) {
            console.error(message);
        }
    }
}
