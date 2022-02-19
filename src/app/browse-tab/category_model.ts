export class CategoryModel {
    img: string;
    name: string;
    viewers: string;
    tag: string;

    constructor(
        img: string,
        name: string,
        viewers: string, 
        tag: string) {
            this.img = img;
            this.name = name;
            this.viewers = viewers;
            this.tag = tag;
        }
}