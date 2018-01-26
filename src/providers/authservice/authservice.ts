import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
 let UrlLogin = "http://mougnetie.herokuapp.com/v1/sessions";

@Injectable()
export class AuthserviceProvider {

  constructor(public http: HttpClient) {}


  login(credentials){

    return new Promise((resolve, reject)=>{

        let headers = new Headers();

        headers.append('Content-Type', 'application/json');

        this.http.post(UrlLogin, JSON.stringify(credentials), {headers: headers})
             .subscribe(res=>{
               resolve(res.json())
             }, (err)=>{
               reject(err);
             });


    });
  }



  logout(){

    return new Promise((resolve, reject)=> {
         let headers = Headers();

         headers.append('X-Email', localStorage.getItem('token'));

         this.http.post(UrlLogin, {}, {headers: headers})
           .subscribe(res => {
             localStorage.clear();
           }, (err) =>{
             reject(err);
           });

    });
  }
}
