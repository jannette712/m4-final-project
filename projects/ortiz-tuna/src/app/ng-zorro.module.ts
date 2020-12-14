import {NgModule} from '@angular/core';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzModalModule} from 'ng-zorro-antd/modal';


@NgModule({
  exports: [
    NzModalModule,
    NzButtonModule
  ]
})
export class NgZorroModule {
}
