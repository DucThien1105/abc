import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Week1Component } from './components/week1/week1.component';

const routes: Routes = [
  {
    path: 'week1',
    component: Week1Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
