import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () => import('../../pages/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'file',
    loadChildren: () => import('../../pages/file/file.module').then(m => m.FileModule),
  },
  {
    path: 'board-list',
    loadChildren: () => import('../../pages/board-list/board-list.module').then(m => m.BoardListModule),
  },
  {
    path: 'post',
    loadChildren: () => import('../../pages/post/post.module').then(m => m.PostModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
