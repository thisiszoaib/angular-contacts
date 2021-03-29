import {
  Directive,
  ElementRef,
  Input,
  NgZone,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { animate } from 'popmotion';

@Directive({
  selector: '[appFlyLeft]',
})
export class FlyLeftDirective {
  @Input() appFlyLeft = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private zone: NgZone
  ) {}

  ngOnChanges(simpleChanges: SimpleChanges) {
    const delay = simpleChanges?.appFlyLeft?.currentValue || 0;
    this.zone.runOutsideAngular(() => {
      animate({
        from: 'translateX(-200px)',
        to: 'translateX(0px)',
        type: 'spring',
        elapsed: -1 * delay,
        onUpdate: (value) => {
          this.renderer.setStyle(this.el.nativeElement, 'transform', value);
        },
      });
    });
  }
}
