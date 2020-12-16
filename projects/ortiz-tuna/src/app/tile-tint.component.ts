import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('tileTint', {static: true}) anchoviesContainer: ElementRef<HTMLCanvasElement>;

  // @ts-ignore
  timeline: TimelineMax;

  pixiApp: unknown;


  ngOnInit(): void {
    gsap.registerPlugin(PixiPlugin);
    PixiPlugin.registerPIXI(PIXI);
  }

  ngAfterContentInit(): void {

    this.pixiApp = new PIXI.Application({
      view: this.anchoviesContainer.nativeElement,
      width: 268,
      height: 268,
      backgroundColor: 5379121,
      antialias: true
    });


    const sprite = new PIXI.Sprite(PIXI.Texture.WHITE);
    sprite.width = sprite.height = 268;
    sprite.position.set(0);
    // @ts-ignore
    this.pixiApp.stage.addChild(sprite);

    this.timeline = new TimelineMax({repeat: -1, yoyo: true})
      .to(sprite, 1, {pixi: {tint: '#ffdf00'}})
      .to(sprite, 1, {pixi: {tint: '#823028'}})
      .to(sprite, 1, {pixi: {tint: '#2F5147'}})
      .to(sprite, 1, {pixi: {tint: '#001860'}});
  }


}
