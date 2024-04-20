import { NgModule } from '@angular/core';
import { FileComponent } from './file.component';
import { SharedModule } from '../../shared/shared.module';
import { FileRoutingModule } from './file-routing.module';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';



@NgModule({
  declarations: [
    FileComponent,
    ReviewDetailComponent
  ],
  imports: [
    FileRoutingModule,
    SharedModule
  ]
})
export class FileModule { }
