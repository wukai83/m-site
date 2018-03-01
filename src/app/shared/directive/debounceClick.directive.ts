import { Directive, HostListener, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import { Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Output()
  debounceClick = new EventEmitter();

  private clicks = new Subject<any>();
  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.subscription = this.clicks.debounceTime(500).subscribe(e => {
      this.debounceClick.emit(e);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
}
