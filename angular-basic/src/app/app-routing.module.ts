import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartementListComponent } from './departement-list/departement-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartementDetailComponent } from './departement-detail/departement-detail.component';


const routes: Routes = [
  { path: "", redirectTo: "/departement-list", pathMatch: 'full' },
  { path: "departement-list", component: DepartementListComponent },
  { path: "departement-list/:id", component: DepartementDetailComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DepartementListComponent, EmployeeListComponent, PageNotFoundComponent, DepartementDetailComponent];