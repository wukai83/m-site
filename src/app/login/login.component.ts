import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/model/common/user.model';
import { AuthService } from '../shared/service/common/auth.service';
import { BaseComponent } from '../shared/component/base.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonUtils } from '../shared/core/common.utils';
import { Router } from '@angular/router';
import { Const } from '../shared/core/const';
import { ToastConfig, ToastType } from '../shared/component/toast/toast-model';
import { ToastService } from '../shared/component/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastService: ToastService
  ) {
    super();
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['sysadmin', [Validators.required, Validators.maxLength(15)]],
      password: ['sysadmin', [Validators.required, Validators.maxLength(15)]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const userName = this.loginForm.controls['userName'].value;
      const password = this.loginForm.controls['password'].value;

      this.router.navigate([Const.PATH_URI.Main]);
      // this.doService(
      //   () => this.authService.login(userName, password),
      //   (result: UserModel) => {
      //     const toastCfg = new ToastConfig(ToastType.SUCCESS, '', '登录成功！', 3000);
      //     this.toastService.toast(toastCfg);
      //     this.router.navigate([Const.PATH_URI.Main]);
      //   }
      // );
    }
  }
}
