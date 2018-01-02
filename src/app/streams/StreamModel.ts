export class StreamModel
{
    game: string;
    display_name: string;
    language: string;
    url: string;


    constructor(game: string, display_name: string, language: string, url: string)
    {
        this.game = game;   
        this.display_name = display_name;
        this.language = language;
        this.url = url;
    }
}