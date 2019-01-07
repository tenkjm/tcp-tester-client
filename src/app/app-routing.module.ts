import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestListComponent } from './request-list/request-list.component';
import { RequestUnitComponent } from './request-unit/request-unit.component';

const routes: Routes = [
  { path: "socketRequests", component: RequestListComponent },
  { path: "socketRequests/:id", component: RequestUnitComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
