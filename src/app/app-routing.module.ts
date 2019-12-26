import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppComponent } from './app.component';
import { TdFormsComponent } from './td-forms/td-forms.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { GoogleFirebasesComponent } from './google-firebases/google-firebases.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { MysqlDbphpComponent } from './mysql-dbphp/mysql-dbphp.component';
import { CustomerCustDataComponent } from './customers/customer-cust-data/customer-cust-data.component';




const routes: Routes = [
  {
    path:'employee',
    component :EmployeeListComponent

  },
  {  path:'tdForms',
    component: TdFormsComponent
  },
  {
    path:'cpipe',
    component:CustomPipeComponent
  },
  {
    path:'gfireBase',
    component:GoogleFirebasesComponent
  }
  ,
  //{ path: 'gfireBase', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'gfireBase/customers', component: CustomersListComponent },
  { path: 'gfireBase/add', component: CreateCustomerComponent },
  { path: 'gfireBase/custom-data', component: CustomerCustDataComponent }

,
  {path:'dbSqlphp',component:MysqlDbphpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//export const routingComponents=[EmployeeListComponent]

