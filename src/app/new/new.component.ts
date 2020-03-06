import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';
import{Router} from '@angular/router';
// import { iData} from './../data';
import * as firebase from 'firebase/app';
import{AngularFireAuth} from '@angular/fire/auth';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public datas :any;
  dataobj:object={};
  visible=true;

constructor(private dataservice:DataService,
  private router:Router,

  public afAuth:AngularFireAuth
  ) { }

ngOnInit() {}

onSubmit =function(submitDatas) {
  
  this.dataobj={
    "name":submitDatas.name,
    
    "email":submitDatas.email
  }
  if(submitDatas.name ==""  || submitDatas.email == ""){
    alert("please enter name or Email");
  }
  else{
    
    
    this.dataservice.createData(submitDatas)
    .subscribe(() =>{ this.fetchData()}); 
    this.fetchData();
    this.router.navigate(['/List']);
  }

}

fetchData()
  {
    this.dataservice.getData()
    .subscribe(data =>{ this.datas = data})
  }


  login(){
    
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())    
    // .then(() => {
    //   window.location.assign('https://accounts.google.com/signin/')
      this.router.navigate(['/List']); 
  // })
}

}