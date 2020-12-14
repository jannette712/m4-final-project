import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {NzModalService} from 'ng-zorro-antd/modal';
import {TunaGameComponent} from './tuna-game.component';

@Component({
  selector: 'ot-tuna-group',
  templateUrl: './tuna-group.component.html',
  styleUrls: ['./tuna-group.component.scss']
})
export class TunaGroupComponent implements OnInit {

  constructor(private modal: NzModalService, private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit(): void {
  }


  createComponentModal(): void {

    const modal = this.modal.create({
      nzTitle: '',
      nzContent: TunaGameComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzBodyStyle: {height: window.innerHeight + 'px', top: '0', width: window.innerWidth + 'px'},
      nzStyle: {height: window.innerHeight + 'px', top: 0, width: window.innerWidth + 'px'},
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: null
    });
    const instance = modal.getContentComponent();
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
  }
}
