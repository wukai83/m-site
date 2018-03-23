import { Directive, Output, EventEmitter, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[debounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  // tslint:disable-next-line:no-output-rename
  @Output('debounceClick') debounceClick = new EventEmitter();
  private clicks = new Subject<any>();
  private subscription: Subscription;
  private debounceTime = 500;

  constructor() {
  }

  ngOnInit() {
    this.subscription = this.clicks
      .debounceTime(this.debounceTime)
      .subscribe(e => {
        this.debounceClick.emit(e);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
