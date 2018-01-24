import {RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { TournamentComponent } from './tournament/tournament.component';
import { MatchComponent } from "./match/match.component";
import { StreamsComponent } from "./streams/streams.component";
import { ImagessliderComponent } from "./imagesslider/imagesslider.component";
import { MainAppComponent } from "./main-app/main-app.component";
import { CreateTournamentComponent } from './tournament/create-tournament/create-tournament.component';
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./.guard/auth.guard";
import { AddmatchComponent } from "./home/addmatch/addmatch.component";
import { AddstreamComponent } from "./home/addstream/addstream.component";


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
        },
        {
            path: 'create-tournament',
            component: CreateTournamentComponent
        },
        {
           path: 'homes',
             component: HomeComponent, canActivate: [AuthGuard]
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
    {
        path: 'addMatch',
        component: AddmatchComponent
    },
    {
        path: 'addStream',
        component: AddstreamComponent
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

