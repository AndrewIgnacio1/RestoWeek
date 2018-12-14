import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { SingleComponent } from './single/single.component';
import { EditComponent } from './edit/edit.component';
import { SinglereviewComponent } from './singlereview/singlereview.component';

import {HttpService} from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    SingleComponent,
    EditComponent,
    SinglereviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
