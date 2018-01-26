import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  urlReport: string = "http://mougnetie.herokuapp.com/v1/reports";


  constructor(public http: HttpClient) {}

   report: any;


   getReportedCars(){

       return this.http.get(this.urlReport).map(report=> this.report = report)

   }



}
