import { NgModule } from '@angular/core';
import { RestaurantLoginComponent } from './restaurantLogin.component';
import { RestaurantRegistrationComponent } from './restaurantRegistration.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { resturantRoutes } from './restaurant.routes';
import { RestaurantApproveComponent } from './restaurantApprove.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RestaurantService } from './restaurant.service';

@NgModule({
    declarations: [RestaurantLoginComponent,
        RestaurantRegistrationComponent,
        RestaurantApproveComponent
    ],

    imports: [BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(resturantRoutes),
     
    ],

    exports: [RestaurantLoginComponent,
        RestaurantRegistrationComponent,
        RestaurantApproveComponent,
        RouterModule,
        
    ],
    providers: [RestaurantService]

})
export class RestaurantModule {

}