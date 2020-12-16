import {Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimelineMax} from 'gsap';

@Directive({
  selector: '[otFadeInAnimation]'
})
export class FadeInAnimationDirective implements OnInit {

  @Input() duration = 1;
  @Input() delay = 0;

  // tslint:disable-next-line:no-output-native
  @Output() complete: EventEmitter<void> = new EventEmitter();
  @Output() reverseComplete: EventEmitter<void> = new EventEmitter();
  /**
   * @link https://greensock.com/docs/v2/TimelineMax
   */
  protected timeline: TimelineMax;

  constructor(protected element: ElementRef) {
    this.timeline = new TimelineMax({
      onComplete: (_: any) => this.complete.emit(),
      onReverseComplete: (_: any) => this.reverseComplete.emit(),
      paused: true,
      reversed: true
    });
  }

  ngOnInit(): void {
    this.animateIn();
  }

  animateIn(): void {
    this.timeline.from(this.element.nativeElement, this.duration, {opacity: '0', ease: 'Expo.easeInOut'}, this.delay);

    if (this.timeline.isActive()) {
      this.timeline.kill();
    }
    this.timeline.play();
  }

}
