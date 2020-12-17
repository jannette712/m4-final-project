import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Power2, TimelineMax} from 'gsap';

@Component({
  selector: 'ot-tile-fishing',
  templateUrl: './tile-fishing.component.html',
  styleUrls: ['./tile-fishing.component.scss']
})
export class TileFishingComponent implements OnInit {

  // @ts-ignore
  @ViewChild('fishingArrow', {static: true}) fishingArrowRef: ElementRef<HTMLElement>;

  // @ts-ignore
  @ViewChild('tileFishing', {static: true}) tileFishingRef: ElementRef<HTMLElement>;

  // @ts-ignore textOne
  @ViewChild('fishingText1', {static: true}) fishingText1Ref: ElementRef<HTMLElement>;

  // @ts-ignore textOne
  @ViewChild('fishingText2', {static: true}) fishingText2Ref: ElementRef<HTMLElement>;

  // @ts-ignore
  timeline: TimelineMax = new TimelineMax();

  arrowDirection: 'up' | 'down' = 'down';

  onMouseClick(): void {

    if (this.arrowDirection === 'down') {
      this.timeline = new TimelineMax()
        .to(this.fishingArrowRef.nativeElement,
          {scale: -1, ease: Power2.easeIn, duration: 0.5}
        )
        .to(this.fishingText2Ref.nativeElement, {
          opacity: 1,
          y: -150,
          duration: 0.5,
          ease: Power2.easeInOut,
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
    this.tileFishingRef.nativeElement.addEventListener('click', this.onMouseClick.bind(this));
  }
}
