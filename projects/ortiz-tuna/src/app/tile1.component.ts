import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Power2, TimelineMax} from 'gsap';

@Component({
  selector: 'ot-tile1',
  template: `
    <div #tile1 class="ot-card ot-card-blue-dark ot-tile1-card">
      <button #tile1img class="ot-tile1-image">
        <img src="https://cdn.glitch.com/5fe96c62-a081-4344-8624-a5e0dd93a10d%2F112?v=1608175603361" width="240px" alt="">
      </button>


      <div #tile1text class="ot-tile1-wrapper">
        <span class="ot-tile1-text-1"> Producto Ortiz </span>
        <span class="ot-tile1-text">
            La mejor calidad gracias al respeto de las artes de pesca tradicionales, resultando en el exquisito sabor e inconfundible textura que marcan la diferencia en nuestros productos.
        </span>

        <a href="https://www.conservasortiz.com/productos/" class="ot-tile1-action">Compra aqui
        </a>
      </div>


      <button #arrowBlue class="ot-up-arrow"></button>


    </div>`
  ,
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
          duration: 0.5,
          ease: Power2.easeInOut,
        })
        .to(this.tile1textRef.nativeElement, {
          opacity: 1,
          y: -315,
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
    this.arrowBlueRef.nativeElement.addEventListener('click', this.onMouseClick.bind(this));
  }


}
