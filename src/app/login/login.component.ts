import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/model/common/user.model';
import { AuthService } from '../shared/service/common/auth.service';
import { BaseComponent } from '../shared/component/base.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonUtils } from '../shared/core/common.utils';
import { Router } from '@angular/router';
import { Const } from '../shared/core/const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseComponent implements OnInit {
  user: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.user = this.fb.group({
      loginId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login({ value, valid }: { value: UserModel, valid: boolean }) {
    if (this.user.valid) {
      console.dir(value);
      console.dir(valid);
    }
    // this.doService(
    //   () => this.authService.login(loginId, password),
    //   (result: UserModel) => {
    //     if (result.loginId === loginId) {
    //       this.router.navigate([Const.PATH_URI.Main]);
    //     }
    //   }
    // );
  }
}
