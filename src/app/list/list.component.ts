import { Component, OnInit, Input } from '@angular/core';
// import {DataService} from './../data.service';
import { Router } from '@angular/router';
import { DataService } from 'data.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public datas :any;
public valuesa: boolean=false;
public dataobj:object={};
public editdata:object={};

  constructor(
    private dataservice:DataService,
     private router:Router,
     public afAuth:AngularFireAuth
     ) { }
 

  ngOnInit() {
   this.fetchData();
  }

  fetchData()
  {
    this.dataservice.getData()
    .subscribe(data =>{ this.datas = data})
  }

  onDelete= function(delDatas) {
    this.dataobj={
      "name":delDatas.name,
      
      "email":delDatas.email
    }
    this.dataservice.deleteData(delDatas)
     .subscribe(() =>{ this.fetchData()})   
     this.router.navigate(['/new']); 
  }
  logout()
  {
  this.afAuth.auth.signOut()
  .then(() => {
  window.open('https://mail.google.com/a/localhost:4200/list/?logout&hl=en',
  'logout_from_google','width=600,height=300,menubar=no,status=no,location=no,toolbar=no,scrollbars=no,top=20,left=20'); 
    }); 
    this.router.navigate(['/new']); 
  }
}
