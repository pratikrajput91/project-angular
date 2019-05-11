import { Component, OnInit } from '@angular/core';
import { Restaurant } from "./restaurant";
import { RestaurantService } from "./restaurant.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
    templateUrl:"./restaurantRegistration.component.html",
   

})
export class RestaurantRegistrationComponent implements OnInit {

    restroForm: FormGroup;
    constructor(private fb: FormBuilder) { }


    ngOnInit() {
        this.restroForm = this.fb.group({

            restaurantname: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            contact: ['', Validators.required],
            city: ['', Validators.required]




        });
    }

    onSubmit() {
        alert("Called");
    }


    get restaurantname() { return this.restroForm.controls.restaurantname; }
    get email() { return this.restroForm.controls.email; }
    get password() { return this.restroForm.controls.password; }
    get contact() { return this.restroForm.controls.contact; }
    get city() { return this.restroForm.controls.city; }




    //     restaurant: Restaurant;
//     constructor(private restaurantService: RestaurantService){}
//     ngOnInit() {
//         this.restaurant = new Restaurant({
//             phone: ['', Validators.required]
//         });
//     }
    



// signUpDetailsOfRestaurant() {
//     alert("Registration Successful");
//     console.log(this.restaurant);
//     this.restaurantService.signUpDetailsOfRestaurant(this.restaurant).subscribe((data)=>{
//         console.log("success");
//         console.log(data);
//         if(data!=null){
//             alert("Done");
//         }
//     });
// }
}