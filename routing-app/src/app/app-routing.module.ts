import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { FirstGuard } from './guards/first.guard';
import { UsersListComponent } from './modules/users/users-list/users-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
    { 
        path: 'first-component', 
        component: FirstComponent,
        children: [
            { path: 'child-a', component: ChildAComponent },
            { path: 'child-b', component: ChildBComponent },
            { path: ':id', component: ThirdComponent },
        ],
        canActivate: [FirstGuard],
    },
    { path: 'second-component/:id', component: SecondComponent },
    { 
        path: 'users',
        loadChildren: () => import('./modules/users/users.module').then(module => module.UsersModule),
    },
    { path: '', redirectTo: 'first-component', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
