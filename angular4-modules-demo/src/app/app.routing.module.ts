import { AuthGuard } from './shared/guards/auth.guard';
import { ModuleAModule } from './module-a/module-a.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainPageComponent } from './core/pages/main-page/main-page.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';

const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '',
        component: MainPageComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomePageComponent
            },
            {
                path: 'module-a',
                loadChildren: 'app/module-a/module-a.module#ModuleAModule'
                
            },
            {
                path: 'module-b',
                loadChildren: 'app/module-b/module-b.module#ModuleBModule'
            },
            {
                path: 'module-c',
                loadChildren: 'app/module-c/module-c.module#ModuleCModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }