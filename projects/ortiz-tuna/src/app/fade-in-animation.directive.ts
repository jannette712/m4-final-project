import {Directive, ElementRef, OnInit} from '@angular/core';
import {CoreAnimationDirective} from './core-animation.directive';

@Directive({
  selector: '[otFadeInAnimation]'
})
export class FadeInAnimationDirective extends CoreAnimationDirective implements OnInit {
  constructor(protected element: ElementRef) {
    super(element);
  }

  ngOnInit(): void {
    this.animateIn();
  }

  protected animateIn(): void {
    this.timeline.from(this.element.nativeElement, this.duration, {opacity: '0', ease: 'Expo.easeInOut'}, this.delay);
    super.animateIn();
  }
}
