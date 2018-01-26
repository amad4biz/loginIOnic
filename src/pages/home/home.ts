import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataServiceProvider} from '../../providers/data-service/data-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  loading: any;
  isLoggedIn: boolean = false;

  constructor(public navCtrl: NavController, private data: DataServiceProvider) {


    if(localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }

     this.getAllReported()
  }

 reportedCars : any;
 userCar: [];


  getAllReported(){

    this.data.getReportedCars().subscribe(mydata=>{
        this.reportedCars = mydata
        console.log(this.reportedCars)
    })
  }



  getUserCars(){


  }

}
