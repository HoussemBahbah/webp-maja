export class Link {
    
    public name: string;
    public category:string;
    public link:string;
    public description:string;
    public date:string;


   



    constructor(name: string,category: string,link: string,description: string,date: string) {
        this.name = name;
        this.link = link;
        this.category=category;
        this.description=description;
        this.date=date;
        
    }

}
