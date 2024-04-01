import { NgModule } from '@angular/core';
import { FileComponent } from './file.component';
import { SharedModule } from '../../shared/shared.module';
import { FileDetailComponent } from './components/file-detail/file-detail.component';
import { FileRoutingModule } from './file-routing.module';



@NgModule({
  declarations: [
    FileComponent,
    FileDetailComponent
  ],
  imports: [
    FileRoutingModule,
    SharedModule
  ]
})
export class FileModule { }
