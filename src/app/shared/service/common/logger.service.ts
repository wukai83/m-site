import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

    constructor(private enable: boolean) { }

    public log(message: string) {
        if (this.enable) {
            console.log(message);
        }
    }

    public error(message: string) {
        if (this.enable) {
            console.error(message);
        }
    }
}
