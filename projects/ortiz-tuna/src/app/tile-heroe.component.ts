import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'ot-tile-heroe',
  templateUrl: './tile-heroe.component.html',
  styleUrls: ['./tile-heroe.component.scss']
})
export class TileHeroeComponent implements OnInit {

  // @ts-ignore
  @ViewChild('tileHeroButton', {static: true}) tileHeroButtonRef: ElementRef<HTMLElement>;
  // @ts-ignore
  @ViewChild('tileHeroVideo', {static: true}) tileHeroVideoRef: ElementRef<HTMLVideoElement>;


  constructor() {
  }

  onMouseClick(): void {
    this.tileHeroVideoRef.nativeElement.play();
  }

  ngOnInit(): void {
    this.tileHeroButtonRef.nativeElement.addEventListener('click', this.onMouseClick.bind(this));
    this.tileHeroVideoRef.nativeElement.addEventListener('click', this.onMouseClick.bind(this));
  }

}
