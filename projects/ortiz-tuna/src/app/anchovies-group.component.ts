import {AfterContentInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TimelineMax} from 'gsap';
import * as PIXI from 'pixi.js';

@Component({
  selector: 'ot-anchovies-group',
  templateUrl: './anchovies-group.component.html',
  styleUrls: ['./anchovies-group.component.scss']
})
export class AnchoviesGroupComponent implements OnInit, AfterContentInit {


  // @ts-ignore
  @ViewChild('anchoviesContainer', {static: true}) anchoviesContainer: ElementRef<HTMLCanvasElement>;

  // @ts-ignore
  timeline: TimelineMax;

  pixiApp: unknown;

  constructor() {
  }

  ngOnInit(): void {


  }

  ngAfterContentInit(): void {

    this.pixiApp = new PIXI.Application({
      view: document.querySelector('#anchoviesContainer') as HTMLCanvasElement,
      width: 568,
      height: 268,
      backgroundColor: 0x000000,
      antialias: true
    });

    const sprite = new PIXI.Sprite(PIXI.Texture.WHITE);

    sprite.width = sprite.height = 200;
    sprite.position.set(100);
    // @ts-ignore
    this.pixiApp.stage.addChild(sprite);

    this.timeline = new TimelineMax({repeat: -1, yoyo: true})
      .to(sprite, 1, {pixi: {tint: '#ff0'}})
      .to(sprite, 1, {pixi: {tint: 0x2196F3}})
      .to(sprite, 1, {pixi: {tint: 'hsl(180, 90%, 60%)'}})
      .to(sprite, 1, {pixi: {tint: 'rgb(236, 64, 122)'}});
  }

}
