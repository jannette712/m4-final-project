import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ot-tile-promo',
  templateUrl: './tile-promo.component.html',
  styleUrls: ['./tile-promo.component.scss']
})
export class TilePromoComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  openTunaGame(): void {
    this.router.navigate(['tuna-game']);

  }

}
