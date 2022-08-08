import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DeptNamePipe } from 'src/pipes/dept-name.pipe';
import { EmpFilterPipe } from 'src/pipes/emp-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    DeptNamePipe,
    EmpFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatPaginatorModule,
    NgbModule,
    FormsModule
  ],
  providers: [ EmpFilterPipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
