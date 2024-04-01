import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { SharedModule } from '../../shared/shared.module';
import { PostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    PostRoutingModule,
    SharedModule
  ]
})
export class PostModule { }
