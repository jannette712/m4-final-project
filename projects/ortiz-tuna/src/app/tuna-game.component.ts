import {Component, Input, OnInit} from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd/modal';

@Component({
  selector: 'ot-tuna-game',
  templateUrl: './tuna-game.component.html',
  styleUrls: ['./tuna-game.component.scss']
})
export class TunaGameComponent {

  @Input() title?: string;
  @Input() subtitle?: string;

  constructor() {}



}
