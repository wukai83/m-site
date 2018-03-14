import { Observable } from "rxjs/Observable";

/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

export declare function toJSON<T>(): Observable<T>;

declare module "rxjs/Observable" {
  interface Observable<T> {
    toJSON: typeof toJSON
  }
}
