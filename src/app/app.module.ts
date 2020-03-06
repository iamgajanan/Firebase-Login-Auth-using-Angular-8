import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';

import{AngularFireModule} from '@angular/fire';
import{AngularFireAuthModule} from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
// import { environment } from 'src/environments/environment';
var firebaseConfig = {
  apiKey: "AIzaSyCRg_UUrRUOkk8sJw5hIUd3_NyxWb-R2Qc",
  authDomain: "fblogin-92057.firebaseapp.com",
  databaseURL: "https://fblogin-92057.firebaseio.com",
  projectId: "fblogin-92057",
  storageBucket: "fblogin-92057.appspot.com",
  messagingSenderId: "981134448731",
  appId: "1:981134448731:web:0551c6c214f986e7"
}

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
