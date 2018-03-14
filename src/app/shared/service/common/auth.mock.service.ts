import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../../model/common/user.model';
import { Const } from '../../core/const';

@Injectable()
export class AuthMockService extends BaseService {

    login(loginId: string, password: string): Observable<UserModel> {
        const data = { loginId: loginId, password: password };
        return this.httpGet(Const.API_URI.Login);
    }
}
