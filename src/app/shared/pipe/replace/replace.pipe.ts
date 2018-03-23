import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  constructor(private translateService: TranslateService) {
  }

  transform(value: string, isTanslate: boolean, ...args): any {
    for (let i = 0; i < args.length; i++) {
      let param = args[i];
      if (isTanslate) {
        param = this.translateService.get(param);
        if (param && param.value) {
          param = param.value;
        }
      }

      const reg = new RegExp('\\{' + i + '\\}', 'g');
      value = value.replace(reg, param);
    }
    return value;
  }
}
