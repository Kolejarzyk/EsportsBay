import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StreamModel } from './StreamModel';

@Injectable()
export class StreamService
{
    constructor(private http: Http) {}


    public getStreams():Observable<StreamModel[]>
    {
        return this.http.get("http://localhost:53504/api/Stream").map(r => r.json());
    }

    public getStreamByCSGO():Observable<StreamModel[]>
    {
        return this.http.get("http://localhost:53504/api/Stream/CSGO").map(r => r.json());
    }

    public getStreamByLOL():Observable<StreamModel[]>
    {
        return this.http.get("http://localhost:53504/api/Stream/LOL").map(r => r.json());
    }




}