import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../shared/model/common/login.model';
import { AuthService } from '../shared/service/common/auth.service';
import { BaseComponent } from '../shared/component/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {

  data: LoginModel;

  constructor(private authService: AuthService) {
    super();
  }

  ngOnInit() {
  }

  login() {
    const user: LoginModel = { userName: 'test', password: '123456' };
    this.doService(() => this.authService.login(user), (data) => {
      this.data = data;
    });

  }
}
