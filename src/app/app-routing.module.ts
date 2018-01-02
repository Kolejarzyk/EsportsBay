import {RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { TournamentComponent } from './tournament/tournament.component';
import { MatchComponent } from "./match/match.component";
import { StreamsComponent } from "./streams/streams.component";
import { ImagessliderComponent } from "./imagesslider/imagesslider.component";
import { MainAppComponent } from "./main-app/main-app.component";


export let  routes:Routes = [
 
{
    path: '',
    component: MainAppComponent,
    children:
    [
        {
            path: '',
            component: ImagessliderComponent
        },
        {
            path: 'tournaments',
            component: TournamentComponent
        },
        {
            path: 'matches',
            component: MatchComponent
        },
        {
            path: 'streams',
            component: StreamsComponent
        }
        ]
    },
    {
        path: 'home',
        redirectTo: ''
    },
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

