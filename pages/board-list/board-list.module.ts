import { NgModule } from '@angular/core';
import { BoardListComponent } from './board-list.component';
import { BoardComponent } from './components/board/board.component';
import { DetailComponent } from './components/detail/detail.component';
import { SharedModule } from '../../shared/shared.module';
import { BoardListRoutingModule } from './board-list-routing.module';


@NgModule({
  declarations: [
    BoardListComponent,
    BoardComponent,
    DetailComponent
  ],
  imports: [
    BoardListRoutingModule,
    SharedModule,
  ]
})
export class BoardListModule { }
