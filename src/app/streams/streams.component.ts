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
  private term: string = "";
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
    this.service.getStreamByLOL().subscribe( items => 
      {
        this.model = items;
        this.isLoading = false;
      })
  }
  
  searchCSGOStream()
  {
    this.service.getStreamByCSGO().subscribe( items => 
      {
        this.model = items;
        this.isLoading = false;
      })
  }

  searchByLang(lang: string)
  {
    this.service.getStreamByLang(lang).subscribe(items => 
    {
      this.model = items;
      this.isLoading = false;
    })
  }
}
