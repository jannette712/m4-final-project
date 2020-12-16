import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'ot-tuna-group',
  templateUrl: './tuna-group.component.html',
  styleUrls: ['./tuna-group.component.scss']
})
export class TunaGroupComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  openTunaGame(): void {
    this.router.navigate(['tuna-game']);

  }

}
