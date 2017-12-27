import {RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';


export let  routes:Routes = [
    {     
        path: 'register', 
        component: RegisterComponent
    },
    /*{
        path:'',
        component:AppComponent
    },*/
    {
        path:'**',
        redirectTo:'/home'
    }
];

