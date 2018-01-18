export class StreamModel
{
    game: string;
    display_name: string;
    language: string;
    imgurl: string;
    url: string;


    constructor(game: string, display_name: string, language: string, imgurl:string,url: string)
    {
        this.game = game;   
        this.display_name = display_name;
        this.language = language;
        this.imgurl = imgurl;
        this.url = url;
    }
}