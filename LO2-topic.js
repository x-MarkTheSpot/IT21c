//Input
const person1 ={
    name:"Mark Lester G. Rasonabe",
    age:19,
    occupation:"Student",
    status:"Single"
}

//Process and Output
console.log("Name: "+person1.name);
console.log("Age: "+person1.age);
console.log("Occupation: "+person1.occupation);
console.log("Status: " + person1.status);
console.log("--------------------------------");


// Class definition
class Person {
    constructor(name, age, occupation, status) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.status = status;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Status: " + this.status);

    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
            <strong>STatus:</strong> ${this.status}
        `;
    }
}

// Creating an object (instance) of the Person class
const personOne = new Person('Mark Lesster', 19, 'Student');

// Calling methods
personOne.displayInfo();    