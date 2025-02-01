"use strict";
// class Car{
function createStudent(firstname, lastname, age) {
    return {
        firstname,
        lastname,
        age,
        greet() {
            console.log(` Hello, my name is ${this.firstname} ${this.lastname}`);
        }
    };
}
const Simon = createStudent("Simon", "Chanzu", 23);
console.log(Simon);
Simon.greet();
