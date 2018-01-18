import { Component, OnInit } from '@angular/core';
import { StreamModel } from './StreamModel';
import { Observable } from 'rxjs/Observable';
import { StreamService } from './stream.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {

  listOfStream = new Observable<StreamModel[]>();

  public isLoading: boolean;

  model: StreamModel[];

  constructor(private service: StreamService) { }

  ngOnInit() {

    this.isLoading = true;
    this.service.getStreams().subscribe( items => 
    {
      this.model = items;
      this.isLoading = false;
    })
  }

  searchLOLStream()
  {

  }
  
  searchCSGOStream()
  {

  }
}
