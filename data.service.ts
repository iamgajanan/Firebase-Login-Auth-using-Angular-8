import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';
import { Observable,throwError }from 'rxjs/';
// import { catchError}from 'rxjs/operators';
// import {iData} from './data';
// import { _sanitizeUrl } from '@angular/core/src/sanitization/url_sanitizer';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  id:number

  private url =  "http://localhost:3000/employees/";
  


  constructor(private http:HttpClient) { 
  }

    getData():Observable<any[]>{
     return this.http.get<any[]>(this.url)
      
    }

    createData(requestData):Observable<any>{
      return this.http.post<any>(this.url,requestData)
    }

    deleteData(delData):Observable<any>{
   
      return this.http.delete<any>(this.url + delData.id ,delData)
    }
   
  }
 
