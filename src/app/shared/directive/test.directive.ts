import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(private elementRef: ElementRef) { }

  @Input()
  fg: FormGroup;

  @HostListener('blur')
  blur() {
    console.dir(this.fg.get('loginId'));
    console.dir(this.elementRef);
    console.dir(this.elementRef.nativeElement);
  }
}
