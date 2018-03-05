import { Injectable } from '@angular/core';

/**
 * sessionStorage 的生命周期是在浏览器关闭前。也就是说，在整个浏览器未关闭前，其数据一直都是存在的
 * @export
 * @class SessionStorageService
 */
@Injectable()
export class SessionStorageService {

    public sessionStorage: Storage;

    constructor() {
        if (!sessionStorage) {
            throw new Error('current browser is not supported!');
        } else {
            this.sessionStorage = window.sessionStorage;
        }
    }

    public set(key: string, value: string): void {
        this.sessionStorage[key] = value;
    }

    public get(key: string): string {
        return this.sessionStorage[key] || false;
    }

    public setObj(key: string, value: any): void {
        this.sessionStorage[key] = JSON.stringify(value);
    }

    public getObj(key: string): any {
        return JSON.parse(this.sessionStorage[key] || '{}');
    }

    public remove(key: string): any {
        this.sessionStorage.removeItem(key);
    }
}
