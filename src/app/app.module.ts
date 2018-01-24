import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { ImagessliderComponent } from './imagesslider/imagesslider.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HotmatchComponent } from './match/hotmatch/hotmatch.component';
import { TournamentComponent } from './tournament/tournament.component';
import { MatchComponent } from './match/match.component';
import { StreamsComponent } from './streams/streams.component';
import { HttpModule } from '@angular/http';
import { MainAppComponent } from './main-app/main-app.component';
import { CreateTournamentComponent } from './tournament/create-tournament/create-tournament.component';
import { UserService } from './.services/user.service';
import { AuthenticationService } from './.services/authentication.service';
import { AlertService } from './.services/alert.service';
import { AppConfig} from './app.config';
import { AuthGuard} from './.guard/auth.guard';
import { AlertComponent } from './-alert/-alert.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { StreamService } from './streams/stream.service';
import { HomeComponent } from './home/home.component';
import { MatchService } from './match/hotmatch/match.service';
import { TournamentDetailsComponent } from './tournament/tournament-details/tournament-details.component';
import { AddmatchComponent } from './home/addmatch/addmatch.component';
import { AddstreamComponent } from './home/addstream/addstream.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ImagessliderComponent,
    FooterComponent,
    LoginComponent,
    HotmatchComponent,
    TournamentComponent,
    MatchComponent,
    StreamsComponent,
    MainAppComponent,
    CreateTournamentComponent,
    AlertComponent,
    HomeComponent,
    TournamentDetailsComponent,
    AddmatchComponent,
    AddstreamComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgxCarouselModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AppConfig,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    StreamService,
    MatchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
