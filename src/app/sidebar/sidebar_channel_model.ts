export class SidebarChannelModel {
    img: string;
    name: string;
    viewers: number;
    category: string;

    constructor(
        img: string,
        name: string,
        viewers: number,
        category: string) {
            this.img = img;
            this.name = name;
            this.viewers =  viewers;
            this.category = category;
        }

}