import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FdTableComponent } from './components/fd-table/fd-table.component';
import {CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    FdTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkDropList,
    CdkDrag
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
