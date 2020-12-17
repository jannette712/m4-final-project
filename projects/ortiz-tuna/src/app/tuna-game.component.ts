import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {TimelineMax, TweenMax, gsap} from 'gsap';

@Component({
  selector: 'ot-tuna-game',
  templateUrl: './tuna-game.component.html',
  styleUrls: ['./tuna-game.component.scss']
})
export class TunaGameComponent implements AfterViewInit {

  // @ts-ignore
  @ViewChild('ladyHeroe', {static: true}) ladyHeroe: ElementRef<HTMLCanvasElement>;


  constructor() {
  }


  ngAfterViewInit(): void {
    gsap.to(this.ladyHeroe.nativeElement, {scale: 5, yoyo: true, duration: 2, ease: 'bounce'});
  }
}
