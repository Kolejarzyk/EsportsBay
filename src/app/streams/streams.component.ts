import { Component, OnInit } from '@angular/core';
import { StreamModel } from './StreamModel';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  twitchTVStream = [
    new StreamModel('CSGO','SHROUD','EN','https://www.twitch.tv/shroud'),
    new StreamModel('LOL','OCELOTE','EN','https://www.twitch.tv/ocelote')
  ];
  constructor() { }

  ngOnInit() {
  }

}
