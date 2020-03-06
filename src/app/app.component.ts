import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/';
import {DataService} from './../../data.service';
// import { iData } from './data';
// import { _getViewData } from '@angular/core/src/render3/instructions';
import {ROUTES,RouterModule} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  // title = 'timepass';
  public datas:any;
  public value:boolean;
//  isAdded :boolean=false;
//  dataobj:object={};
  constructor(private dataservice:DataService){}
  // id:number;
  // name:string;
  // adress:string;
// private headers = new  HttpHeaders ({'Content-Type':'application/json'});
  

  ngOnInit() { console.log("App component"); }
  fetchdata(){
    
    this.dataservice.getData()
    .subscribe(data =>{ this.datas = data})
  }
  
  onSubmit() { }

 

// onUpdate(upData)
// {
//   this.value=true;
//   // this.upData=upData
//   this.dataservice.updateData(upData)
//     .subscribe(responseUpdate => {this.datas=responseUpdate});
// }
}
