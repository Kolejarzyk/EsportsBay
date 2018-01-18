export class StreamModel
{
    game: string;
    displayName: string;
    language: string;
    imgUrl : string;
    url: string;


    constructor(game: string, displayName: string, language: string,imgUrl:string, url: string)
    {
        this.game = game;   
        this.displayName = displayName;
        this.language = language;
        this.imgUrl = imgUrl;
        this.url = url;
    }
}