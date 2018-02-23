import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  @Input()
  counter = 0;

  constructor(private cdRef: ChangeDetectorRef) { }

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
}
