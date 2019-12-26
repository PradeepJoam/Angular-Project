import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { TdFormsComponent } from './td-forms/td-forms.component';
import { MustMatchDirective } from './_helpers/must-match.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { MypipePipe } from './mypipe.pipe';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import { GoogleFirebasesComponent } from './google-firebases/google-firebases.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { MysqlDbphpComponent } from './mysql-dbphp/mysql-dbphp.component';
import { CustomerCustDataComponent } from './customers/customer-cust-data/customer-cust-data.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    TdFormsComponent,
    MustMatchDirective,
    CustomPipeComponent,
    MypipePipe,
    GoogleFirebasesComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent,
    MysqlDbphpComponent,
    CustomerCustDataComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)//for firebase config
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
