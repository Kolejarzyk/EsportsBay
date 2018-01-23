import { Component, OnInit } from '@angular/core';
import {SingleEliminationTournament, SingleEliminationBracket } from "@siggame/tourneyjs"
import { TeamModel } from '../../match/hotmatch/TeamModel';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.css']
})
export class CreateTournamentComponent implements OnInit {

  teams : TeamModel[]
  constructor() { }
 
  ngOnInit() {
  }

}
