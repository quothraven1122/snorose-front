import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';
import { PointBottomSheetComponent } from './components/point-bottom-sheet/point-bottom-sheet.component';



@NgModule({
  declarations: [
    MainComponent,
    PointBottomSheetComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
