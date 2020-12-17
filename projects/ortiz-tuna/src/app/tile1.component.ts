import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap, Power2, TimelineMax} from 'gsap';

@Component({
  selector: 'ot-tile1',
  templateUrl: './tile1.component.html',
  styleUrls: ['./tile1.component.scss']
})
export class Tile1Component implements OnInit {

  // @ts-ignore
  @ViewChild('arrowBlue', {static: true}) arrowBlueRef: ElementRef<HTMLElement>;

  // @ts-ignore
  @ViewChild('tile1', {static: true}) tile1Ref: ElementRef<HTMLElement>;

  // @ts-ignore textOne
  @ViewChild('tile1img', {static: true}) tile1imgRef: ElementRef<HTMLElement>;

  // @ts-ignore textOne
  @ViewChild('tile1text', {static: true}) tile1textRef: ElementRef<HTMLElement>;

  // @ts-ignore
  timeline: TimelineMax = new TimelineMax();

  arrowDirection: 'up' | 'down' = 'down';

  onMouseClick(): void {

    if (this.arrowDirection === 'down') {
      this.timeline = new TimelineMax()
        .to(this.arrowBlueRef.nativeElement,
          {scale: -1, ease: Power2.easeIn, duration: 0.5}
        )
        .to(this.tile1imgRef.nativeElement, {
          y: -250,
          duration: 0.4,
          ease: Power2.easeIn,
        })

        .to(this.tile1textRef.nativeElement, {
          opacity: 1,
          y: -300,
          duration: 0.4,
          ease: Power2.easeIn,
        });
      this.arrowDirection = 'up';
      return;
    }

    if (this.arrowDirection === 'up') {
      this.timeline.reverse();
      this.arrowDirection = 'down';
    }


  }

  ngOnInit(): void {
    this.tile1Ref.nativeElement.addEventListener('click', this.onMouseClick.bind(this));
  }


}
