import { Directive, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[click.stop]'
})
export class StopPropagationDirective {
  // tslint:disable-next-line:no-output-rename
  @Output('click.stop') stopPropEvent = new EventEmitter();
  unsubscribe: () => void;

  constructor(
    private renderer: Renderer2, // Angular 2.x导入Renderer
    private element: ElementRef) {
      console.log(999);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    console.log(888);
    this.unsubscribe = this.renderer.listen(
      this.element.nativeElement, 'click', event => {
        event.stopPropagation();
        this.stopPropEvent.emit(event);
      });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    console.log(777);
    this.unsubscribe();
  }
}
