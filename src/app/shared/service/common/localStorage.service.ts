import { Injectable } from '@angular/core';

/**
 * localStorage的生命周期是永久性的。假若使用localStorage存储数据，即使关闭浏览器，
 * 也不会让数据消失，除非主动的去删除数据
 *
 * @export
 * @class LocalStorageService
 */
@Injectable()
export class LocalStorageService {

    public localStorage: Storage;

    constructor() {
        if (!localStorage) {
            throw new Error('current browser is not supported！');
        } else {
            this.localStorage = window.localStorage;
        }
    }

    public set(key: string, value: string): void {
        this.localStorage[key] = value;
    }

    public get(key: string): string {
        return this.localStorage[key] || false;
    }

    public setObj(key: string, value: any): void {
        this.localStorage[key] = JSON.stringify(value);
    }

    public getObj(key: string): any {
        return JSON.parse(this.localStorage[key] || '{}');
    }

    public remove(key: string): any {
        this.localStorage.removeItem(key);
    }
}
