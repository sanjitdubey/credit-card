import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { ResultComponent } from './components/result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent,
    ResultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
