import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {gsap, TimelineMax} from 'gsap';
import * as PIXI from 'pixi.js';
import {PixiPlugin} from 'gsap/PixiPlugin';

@Component({
  selector: 'ot-tile-tint',
  templateUrl: './tile-tint.component.html',
  styleUrls: ['./tile-tint.component.scss']
})
export class TileTintComponent implements OnInit, AfterContentInit {


  // @ts-ignore
  @ViewChild('tileTint', {static: true}) tileTintRef: ElementRef<HTMLCanvasElement>;

  // @ts-ignore
  canvasTile: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | null | undefined;

  // @ts-ignore
  timeline: TimelineMax;

  pixiApp: unknown;


  ngOnInit(): void {
    gsap.registerPlugin(PixiPlugin);
    PixiPlugin.registerPIXI(PIXI);

   /* this.canvasTile = this.tileTintRef.nativeElement;
    this.context = this.canvasTile.getContext('2d');

    // @ts-ignore
    this.context.font = '30px Comic Sans MS';
    // @ts-ignore
    this.context.fillStyle = 'red';
    // @ts-ignore
    this.context.textAlign = 'center';

    this.context?.fillText('Hello World', 268 / 2, 268 / 2);*/

    this.pixiApp = new PIXI.Application({
      view: this.tileTintRef.nativeElement,
      width: 268,
      height: 268,
      backgroundColor: 5379121,
      antialias: true
    });


    const sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
    sprite.tint = 6240;
    sprite.width = sprite.height = 268;
    sprite.position.set(0);
    // @ts-ignore
    this.pixiApp.stage.addChild(sprite);



    this.timeline = new TimelineMax({repeat: -1, yoyo: true})
      .to(sprite, 1, {pixi: {tint: '#823028'}, ease: 'slow'})
      .to(sprite, 1, {pixi: {tint: '#2F5147'}, ease: 'slow'});


  }

  ngAfterContentInit(): void {


  }


}
