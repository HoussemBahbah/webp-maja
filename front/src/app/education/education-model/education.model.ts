export class Education {
    
    public name: string;
    public category:string;
    public text:string;
    public description:string;
    public date:string;


   



    constructor(name: string,category: string,text: string,description: string,date: string) {
        this.name = name;
        this.text = text;
        this.category=category;
        this.description=description;
        this.date=date;
        
    }

}
