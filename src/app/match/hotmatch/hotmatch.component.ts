import { Component, OnInit } from '@angular/core';

import { TeamModel } from '../../models/TeamModel';
import { MatchModel } from '../../models/MatchModel';

@Component({
  selector: 'hotmatch',
  templateUrl: './hotmatch.component.html',
  styleUrls: ['./hotmatch.component.css']
})
export class HotmatchComponent implements OnInit {

  teamVirtusPro: TeamModel = {
    name: "Virtus Pro",
    logoImg: "/assets/virtus.png"
  }

  teamSK: TeamModel = 
  {
    name: "SK Gaming",
    logoImg: "/assets/sk.png"
  }

  match: MatchModel =
  {
    firstTeam: this.teamVirtusPro,
    secondTeam: this.teamSK,
    time: "14:00",
    date: new Date(2017,12,24)
  }
  constructor() { }

  ngOnInit() {
  }

}
