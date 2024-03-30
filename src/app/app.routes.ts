import { Routes } from '@angular/router';
import { MainComponent } from '../../pages/main/main.component';
import { BoardComponent } from '../../pages/board-list/components/board/board.component';
import { FileComponent } from '../../pages/file/file.component';
import { BoardListComponent } from '../../pages/board-list/board-list.component';
import { DetailComponent } from '../../pages/board-list/components/detail/detail.component';
import { FileDetailComponent } from '../../pages/file/components/file-detail/file-detail.component';
import { PostComponent } from '../../pages/post/post.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'board-list',
        component: BoardListComponent,
    },
    {
        path: 'board-list/:name',
        component: BoardComponent
    },
    {
        path: 'board-list/:name/post',
        component: PostComponent
    },
    {
        path: 'board-list/:name/:id',
        component: DetailComponent
    },
    {
        path: 'file',
        component: FileComponent
    },
    {
        path: 'file/:id',
        component: FileDetailComponent
    },
    {
        path: 'file/post/new',
        component: PostComponent
    },
];
// const appRoutes: Routes = [
//     { path: 'crisis-center', component: CrisisListComponent },
//     { path: 'hero/:id',      component: HeroDetailComponent },
//     {
//       path: 'heroes',
//       component: HeroListComponent,
//       data: { title: 'Heroes List' }
//     },
//     { path: '',
//       redirectTo: '/heroes',
//       pathMatch: 'full'
//     },
//     { path: '**', component: PageNotFoundComponent }
//   ];
//   export const appConfig: ApplicationConfig = {
//       providers: [provideRouter(routes, withDebugTracing())]
//   }