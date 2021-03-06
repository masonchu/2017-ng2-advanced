import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { fallbackRoute } from 'app/shared/fullback-route';
import { LoginGuard } from 'app/login.guard';
import { ClassicComponent } from 'app/forms/classic/classic.component';
import { Classic2Component } from 'app/forms/classic2/classic2.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'forms/classic', component: ClassicComponent },
      { path: 'forms/classic2', component: Classic2Component },
      { path: 'card/:type', component: CardComponent },
      {
        path: 'charts', loadChildren: './charts/charts.module#ChartsModule',
        canActivate: [LoginGuard]
      },
    ]
  },
  { path: 'login', component: LoginComponent },

  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false
  })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
