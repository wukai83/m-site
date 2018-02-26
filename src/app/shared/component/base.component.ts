import { Initializer } from '../initializer';

export class BaseComponent {

  constructor(private initializer: Initializer) {
    console.dir(this.initializer.config);
  }

  protected doService(service: Function, callback: Function, ...conditions: any[]) {
    service(conditions).subscribe(
      // コールバック
      (data: any) => callback(data),
      // エラー処理
      error => this.doErrorHanding(error)
    );
  }

  /**
   * エラー処理を行う。
   * @param error エラー情報
   */
  private doErrorHanding(e: any): void {
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
}
