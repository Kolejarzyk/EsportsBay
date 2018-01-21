import { TeamModel } from "./TeamModel";

export class MatchModel
{
    public description: string;
    public scoreTeam1: string;
    public scoreTeam2: string;
    public startDate: string;
    public team1: string;
    public team2: string;

    constructor(description: string,scoreTeam1: string, scoreTeam2: string, startDate: string,team1: string, team2: string )
    {
       this.description = description;
       this.scoreTeam1 = scoreTeam1;
       this.scoreTeam2 = scoreTeam2;
       this.startDate = startDate;
       this.team1 = team1;
       this.team2 = team2;
    }

}