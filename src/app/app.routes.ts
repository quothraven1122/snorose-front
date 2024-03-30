import { Routes } from '@angular/router';
import { MainComponent } from '../../pages/main/main.component';
import { BoardComponent } from '../../pages/board-list/components/board/board.component';
import { FileComponent } from '../../pages/file/file.component';
import { BoardListComponent } from '../../pages/board-list/board-list.component';

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
        path: 'file',
        component: FileComponent
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