import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class BaseComponent implements OnDestroy {
  // subscription取消
  protected componetDestroyed = new Subject();
  ngOnDestroy(): void {
    this.componetDestroyed.unsubscribe();
  }
  constructor() {
  }

  protected doService(service: Function, callback: Function, after: Function = () => { this.doComplete(); }) {
    service().subscribe(
      data => callback(data),
      error => this.doErrorHanding(error),
      () => after()
    );
  }

  /**
   * エラー処理を行う。
   * @param error エラー情報
   */
  protected doErrorHanding(e: any): void {
    // TODO:異常パターン
    if (e.status === 401 || e.status === 403) {
      // 認証認可異常
    } else if (e.status === 404) {
      // Not Found
    } else if (e.status >= 500) {
      // 500系異常
    } else {

    }
  }

  protected doComplete(): void {
  }
}
