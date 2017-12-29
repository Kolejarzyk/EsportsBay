import { TeamModel } from "./TeamModel";

export class MatchModel
{
    public firstTeam: TeamModel;
    public secondTeam: TeamModel;
    public time: string;
    public date: Date;

    constructor(firstTeam: TeamModel,secondTeam: TeamModel, time: string, date: Date )
    {
       this.firstTeam = firstTeam;
       this.secondTeam = secondTeam;
       this.time = time;
       this.date = date;
    }

}