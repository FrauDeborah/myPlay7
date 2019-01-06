import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// list components that are routed here
import { AddressFormComponent } from './address-form/address-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: {pageTitle: 'Home'} },
  { path: 'address-form', component: AddressFormComponent, data: {pageTitle: 'Sample Address Form'} },
  { path: 'dashboard', component: DashboardComponent, data: {pageTitle: 'Sample Dashboard'} },
  { path: 'drag-drop', component: DragDropComponent, data: {pageTitle: 'Sample Drag Drop'} },
  { path: 'table', component: TableComponent, data: {pageTitle: 'Sample Table'} },
  { path: 'tree', component: TreeComponent, data: {pageTitle: 'Sample Tree'} },

  // add new pages for the router above this comment line.
  // the empty path should always list as 2nd to last path.
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  // Wild card route is always listed last and used when page is not found.
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
