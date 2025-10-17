class car {
    constructor(brand = "unknown", model = "Base") {
        this.brand = brand;
        this.model = model;
    }

    displayInfo() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log("--------------------");
    }
}


const car1 = new car ("BMW " , "X5");
const car2 = new car ("Audi" , "A6");
const car3 = new car ("Toyota" , "Camry");
const car4 = new car ("Honda" , "Civic");
const car5 = new car ("Ford" , "Mustang");


car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
car4.displayInfo();
car5.displayInfo();