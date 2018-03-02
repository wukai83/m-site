import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { LoginModel } from '../../model/common/login.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthMockService extends BaseService {

    public login(data: LoginModel) {
        return Observable.of(data);
    }
}
