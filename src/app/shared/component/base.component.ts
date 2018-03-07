export class BaseComponent {

  constructor() {
  }

  protected doService(service: Function, callback: Function, after?: Function) {
    service().subscribe(
      data => callback(data),
      error => this.doErrorHanding(error),
      () => this.doComplete()
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
