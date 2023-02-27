import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttendaceTableComponent } from './attendace-table/attendace-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AttendaceTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,// import HttpClientModule after BrowserModule.  
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
