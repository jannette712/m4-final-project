import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap, Power2} from 'gsap';

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


  constructor() {
  }

  onMouseOver(): void {
    gsap.to(this.arrowBlueRef.nativeElement, {
      opacity: 1,
      duration: 0.2,
      ease: Power2.easeIn,
    });
  }

  onMouseOut(): void {
    gsap.to(this.arrowBlueRef.nativeElement, {
      opacity: 0,
      duration: 0.2,
      ease: Power2.easeIn,
    });
  }

  onMouseClick(): void {

    this.tile1Ref.nativeElement.removeEventListener('mouseover', this.onMouseOver.bind(this));
    this.tile1Ref.nativeElement.removeEventListener('mouseout', this.onMouseOut.bind(this));

    gsap.to(this.tile1imgRef.nativeElement, {
      y: -250,
      duration: 0.5,
      ease: Power2.easeIn,
    });

    gsap.to(this.arrowBlueRef.nativeElement, {
      opacity: 0,
      visibility: 'hidden',
      duration: 1,
      ease: Power2.easeIn,
    });

    gsap.to(this.tile1textRef.nativeElement, {
      opacity: 1,
      y: -300,
      duration: 0.5,
      ease: Power2.easeIn,
    });

  }

  ngOnInit(): void {

    this.tile1Ref.nativeElement.addEventListener('mouseover', this.onMouseOver.bind(this));
    this.tile1Ref.nativeElement.addEventListener('mouseout', this.onMouseOut.bind(this));
    this.tile1Ref.nativeElement.addEventListener('click', this.onMouseClick.bind(this));
  }


}
