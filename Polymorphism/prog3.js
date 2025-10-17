// Set and Get method


class PrimeMinister {
    constructor() {
        this.firstname;
    }

    set firstName(name) {
        this.firstname = name;
    }

    get firstName() {
        return this.firstname;
    }
}

let person = new PrimeMinister();
person.firstName = "Narendra Modi";
console.log(`Prime Minister : ${person.firstName}`);