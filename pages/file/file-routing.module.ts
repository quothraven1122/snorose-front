import { NgModule } from '@angular/core';
import { FileComponent } from './file.component';
import { RouterModule, Routes } from '@angular/router';
import { FileDetailComponent } from './components/file-detail/file-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: FileComponent
  },
  {
    path: ':id',
    component: FileDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileRoutingModule { }