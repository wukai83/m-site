import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { Observable } from 'rxjs/Observable';
import { Const } from '../../core/const';
import { UserModel } from '../../model/common/user.model';

@Injectable()
export class AuthService extends BaseService {

    login(loginId: string, password: string): Observable<UserModel> {
        // this.httpPost(Const.PATH_URI.Login, data);
        return Observable.of<UserModel>();
    }
}
