import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../shared/component/base.component';
import { AuthService } from '../shared/service/common/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends BaseComponent implements OnInit {

  constructor(private authService: AuthService) {
    super();
  }

  ngOnInit() {
  }

  fromChild() {
    this.doService(
      () => this.authService.login('', ''),
      (data) => {
        console.dir(data);
      }
    );
  }

  fromParent() {
    console.log('I am Parent');
  }
}
