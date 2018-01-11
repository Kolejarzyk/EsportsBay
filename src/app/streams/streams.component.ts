import { Component, OnInit } from '@angular/core';
import { StreamModel } from './StreamModel';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  twitchTVStream = [
    new StreamModel('CSGO','ELEAGUE','EN','https://static-cdn.jtvnw.net/jtv_user_pictures/eleaguetv-profile_image-3944326c25ed471d-300x300.jpeg','https://www.twitch.tv/eleaguetv'),
    new StreamModel('CSGO','SHROUD','EN','https://www.dexerto.com/app/uploads/2017/09/2-shroud.jpg','https://www.twitch.tv/shroud'),
    new StreamModel('LOL','OCELOTE','EN','https://static-cdn.jtvnw.net/jtv_user_pictures/ocelote-profile_image-03368bba0d8e301d-300x300.png','https://www.twitch.tv/ocelote')
  ];

  searchLOLStream()
  {

  }

  searchCSGOStream()
  {
    
  }

  constructor() { }

  ngOnInit() {
  }

}
