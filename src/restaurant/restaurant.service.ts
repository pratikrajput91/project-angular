import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class RestaurantService {
    baseUrl="http://localhost:8089/restro";
    headers= new HttpHeaders({'Access-Control-Allow-Origin' : '*'})
    constructor(private http:HttpClient){

    }
    signUpDetailsOfRestaurant(restaurant:Restaurant):Observable<Restaurant>{
        console.log(restaurant);
        return this.http.post<Restaurant>(this.baseUrl+"/signup",restaurant,{headers: this.headers})

    }
    signInDetailsOfRestaurant(email:string):Observable<Restaurant> {
        return this.http.get<Restaurant>(this.baseUrl+"/loginuser/"+email);
        
    }
    
}