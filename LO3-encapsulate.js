class Person{

    //private Field
    #name;
    #age;
    #occupation;
    #status;
    #goal;

    constructor(name, age, occupation, motto, healthstatus){
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
        this.#status = motto;
        this.#goal = healthstatus;
    }

    //getters
    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }

    get occupation(){
        return this.#occupation;
    }

    get status(){
        return this.#status;
    }

    get goal(){
        return this.#goal;
    }

    // method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Status: " + this.status);
        console.log("Goal: " + this.goal);
    }

    // method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
            <strong>Status:</strong> ${this.status}
            <strong>Goal:</strong> ${this.goal}
        `;
    }
}


// Creating an object (instance) of the Person class
const personOne = new Person('Chony in the mix', 19, 'Student', 'Undefined kay single','To be a biologist');

// Calling methods
personOne.displayInfo();  
personOne.displayInfoHTML();