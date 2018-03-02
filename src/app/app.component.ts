import { Component } from '@angular/core';
import { Initializer } from './shared/core/initializer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private initializer: Initializer) {
    console.dir(this.initializer.config);
  }
}
