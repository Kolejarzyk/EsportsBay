import { Component, OnInit } from '@angular/core';
import { TeamModel } from './TeamModel';
import { MatchModel } from './MatchModel';
import { Observable } from 'rxjs/Observable';
import { MatchService } from './match.service';

@Component({
  selector: 'hotmatch',
  templateUrl: './hotmatch.component.html',
  styleUrls: ['./hotmatch.component.css']
})
export class HotmatchComponent implements OnInit {

  listOfStream = new Observable<MatchModel[]>();
  
  public isLoading: boolean;
  private term: string = "";
  model: MatchModel[];
  constructor(private service: MatchService) { }

  ngOnInit() {
    this.isLoading = true;
    this.service.getMatches().subscribe( items => 
    {
      this.model = items;
      this.isLoading = false;
    })
  }


  searchTeam(term : string)
  {
    this.service.getMatch(term).subscribe( items => 
      {
        this.model = items;
        this.isLoading = false;
      })
  }
}
