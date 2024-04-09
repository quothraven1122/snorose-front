import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../../pages/membership/components/sign-in/sign-in.component';
import { SignUpComponent } from '../../pages/membership/components/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/signIn',
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
  {
    path: 'membership',
    loadChildren: () => import('../../pages/membership/membership.module').then(m => m.MembershipModule),
  },
  {
    path: 'signIn',
    component: SignInComponent
  },
  {
    path: 'signUp',
    component: SignUpComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
