import { Component } from '@angular/core';
import { Initializer } from './shared/core/initializer';
import { TranslateService } from '@ngx-translate/core';
import { Const } from './shared/core/const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private initializer: Initializer,
    private translate: TranslateService
  ) {
    const defualtLang = Const.LANG.CHINESE;
    this.translate.setDefaultLang(defualtLang);
    this.translate.use(defualtLang);
  }
}
