import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant';
import { RestaurantService } from './restaurant.service';


@Component({
    templateUrl:"./restaurantLogin.component.html",
    // selector:"customer-login"
    styleUrls: ["./restaurantLogin.component.css"]


})
export class RestaurantLoginComponent implements OnInit {
    restaurant: Restaurant;
    constructor(private restaurantService: RestaurantService) { }
    ngOnInit() {
        this.restaurant=new Restaurant();
    }

   signInDetailsOfUser() {
       // alert("method");
        console.log(this.restaurant);
        let password = (<HTMLInputElement>document.getElementById("password")).value;
        let email = (<HTMLInputElement>document.getElementById("email")).value;
        
        this.restaurantService.signInDetailsOfRestaurant(email,password).subscribe((data) => {
            alert("Login Successful");
            console.log(data);
            if (data != null) {
                //alert("done");
             

            }
        });

    }
}