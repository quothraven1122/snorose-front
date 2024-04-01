import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { MainRoutingModule } from './main-routing.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
