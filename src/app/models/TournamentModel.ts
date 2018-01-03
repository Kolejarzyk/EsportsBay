import { GameModel } from "./GameModel";

export class TournamentModel
{
    public gameName: GameModel;
    public map: string;
    public type: string;
    public format: string;
    public numberOfPlayers: Number;
    public maxNumberOfPlayers: Number;
    public time: string;
    public date: Date;

    constructor (gameName: GameModel, map: string, type: string,
         format: string, numberOfPlayer: Number, maxNumberOfPlayers: Number, 
         time: string, date: Date) 
    {
        this.gameName = gameName;
        this.map = map;
        this.type = type;
        this.format = format;
        this.numberOfPlayers = numberOfPlayer;
        this.maxNumberOfPlayers = maxNumberOfPlayers;
        this.time = time;
        this.date = date;
    }

}