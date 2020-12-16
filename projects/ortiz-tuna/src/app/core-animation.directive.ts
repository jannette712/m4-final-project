import {ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {TimelineMax} from 'gsap';

export class CoreAnimationDirective {

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

  protected animateIn(): void {
    if (this.timeline.isActive()) {
      this.timeline.kill();
    }
    this.timeline.play();
  }
}
