export class StreamModel
{
    game: string;
    display_name: string;
    language: string;
    imgUrl : string;
    url: string;


    constructor(game: string, display_name: string, language: string,imgUrl:string, url: string)
    {
        this.game = game;   
        this.display_name = display_name;
        this.language = language;
        this.imgUrl = imgUrl;
        this.url = url;
    }
}