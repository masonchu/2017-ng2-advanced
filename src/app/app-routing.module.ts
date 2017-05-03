import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { fallbackRoute } from 'app/shared/fullback-route';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'card/:type', component: CardComponent },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
    ]
  },
  { path: 'login', component: LoginComponent },

  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: true
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
