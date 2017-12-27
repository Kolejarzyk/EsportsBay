import {RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";


export let  routes:Routes = [
    {     
        path: 'register', 
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    // {
    //     path:'',
    //     component:AppComponent
    // },
    {
        path:'**',
        redirectTo:'/home'
    }
];

