import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MatchModel } from './MatchModel';

@Injectable()
export class MatchService
{
    constructor(private http: Http) {}


    public getMatches():Observable<MatchModel[]>
    {
        return this.http.get("http://localhost:53504/api/Match").map(r => r.json());
    }

    public getMatch(teamName: string):Observable<MatchModel[]>
    {
        return this.http.get("http://localhost:53504/api/Match/" + teamName).map(r => r.json());
    }



}