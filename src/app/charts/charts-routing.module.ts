import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlotComponent } from 'app/charts/flot/flot.component';

const routes: Routes = [
  { path: '', redirectTo: 'flot', pathMatch: 'full' },
  { path: 'flot', component: FlotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ChartsRoutingModule { }
