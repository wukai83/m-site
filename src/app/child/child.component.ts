import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Initializer } from '../shared/initializer';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input()
  counter = 0;

  constructor(private cdRef: ChangeDetectorRef, private initializer: Initializer) { }

  ngOnInit() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  detachCD(checked: boolean) {
    if (checked) {
      this.cdRef.detach();
    } else {
      this.cdRef.reattach();
    }
  }

  click() {
    console.dir(this.initializer.config);
  }
}
