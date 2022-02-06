export class ChannelModel {
    img: string;
    name: string;
    title: string;
    viewers: number;
    thumbnail: string;
    language: string;
    category: string;

    constructor(
        img: string,
        name: string,
        title: string,
        viewers: number,
        thumbnail: string,
        language: string,
        category: string) {
            this.img = img;
            this.name = name;
            this.title = title;
            this.viewers =  viewers;
            this.thumbnail = thumbnail;
            this.language = language;
            this.category = category;
        }

}