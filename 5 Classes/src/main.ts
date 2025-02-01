// class Car{

//     name:string
//     brand:string
//     model:number
//     color:string
//     driven:number

//     constructor(
//         name:string,
//         brand:string,
//         model:number,
//         color:string,
//         driven:number
//     ){
//         this.name=name
//         this.brand=brand
//         this.model=model
//         this.color=color
//         this.driven=driven
//     }

//     revv():void{
//         console.log(`This is the ${this.model}, ${this.name} ${this.brand}. A ${this.color} ${this.driven}kms mileage monster`)
//     }
// }

// const car1= new Car("Mercedes","GLe",2022,"Blue",3000)
// car1.revv()

interface Person {
    firstname:string
    lastname:string
    age:number
    greet():void
}

function createStudent(firstname:string,
    lastname:string,
    age:number,) :Person{
        return{
            firstname,
            lastname,
            age,
            greet():void{
                console.log(` Hello, my name is ${this.firstname} ${this.lastname}`)
            }
        }

}

const Simon = createStudent("Simon","Chanzu",23);

console.log(Simon)
Simon.greet()