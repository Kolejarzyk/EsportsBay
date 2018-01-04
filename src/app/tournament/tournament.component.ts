import { Component, OnInit } from '@angular/core';
import { GameModel } from '../models/GameModel';
import { TournamentModel } from '../models/TournamentModel';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})

export class TournamentComponent implements OnInit {

  leagueOfLegends: GameModel = {
    name: "League of Legends"
  }
  tournament1: TournamentModel = {
        gameName: this.leagueOfLegends,
        map: "Summoners Rift",
        type: "Turniej 5v5",
        format: "Best of 3",
        numberOfPlayers: 13,
        maxNumberOfPlayers: 16,
        time: "17:30",
        date: new Date (2018,1,12)
  }
  tournament2: TournamentModel = {
    gameName: this.leagueOfLegends,
    map: "Summoners Rift",
    type: "Turniej 5v5",
    format: "Best of 1",
    numberOfPlayers: 7,
    maxNumberOfPlayers: 32,
    time: "15:30",
    date: new Date (2018,1,8)
}

  constructor() { }

  ngOnInit() {
  }

}
