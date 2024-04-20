import { NgModule } from '@angular/core';
import { FileComponent } from './file.component';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: FileComponent
  },
  {
    path: ':id',
    component: ReviewDetailComponent
  },
  {
    path: 'post/new',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }