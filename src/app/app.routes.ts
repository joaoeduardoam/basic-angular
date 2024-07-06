import { Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';

import { routeGuard } from './auth/route.guard';

export const routes: Routes = [
    {path: 'page1', component:Page1Component},
    {path: 'page2', component:Page2Component, canActivate: [routeGuard]},
    {path: '', redirectTo:'/page1', pathMatch:'full'},
    {path: '**', component:PageErrorComponent}
];
