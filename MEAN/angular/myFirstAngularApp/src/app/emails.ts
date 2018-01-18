export class Emails {
    subject: string;
    importance: string;
    from : string;
    content: string;
    constructor(subject:string, importance:boolean, from:string, content: string){
        this.subject = subject;
        this.from = from;
        this.content = content;

        if(importance == true){
            this.importance = "High"
        }else{
            this.importance = "Low"
        }
    }
}
