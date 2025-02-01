interface Person1 {
     name:string;
     age:number;

}

class YouRi implements Person1{
     _name:string;
     _age:number;

    constructor(name:string,age:number){
        this._name= name
        this._age=age
    }
    get name():string{
        return this._name
    }
    set name(newName:string){
        if (newName.length>0){
            this._name=newName
        }
        else{
            throw new Error ("Incorrect words")
        }
    }
    get age(): number {
        return this._age;
    }

    // Setter for age
    set age(newAge: number) {
        if (newAge >= 0) {
            this._age = newAge;
        } else {
            throw new Error("Age cannot be negative!");
        }
    }
}
