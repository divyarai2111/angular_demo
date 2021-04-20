export class Note {
    id:number;
    title:string;
    text:string;
  
    constructor(){
       this.id= Math.random()*1000;
       this.title="";
       this.text="";
    }
}
