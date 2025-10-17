
// Polymorphism (method overriding) 

class Jarir {
    displayMsg() {
        console.log("Hello from Jarir.");
    }
}

class Shivam extends Jarir {
    displayMsg() {
        console.log("Hello from Shivam.");
    }
}

class Nurul extends Jarir {
    displayMsg() {
        console.log("Hello frmo Nurul.");
    }
}
// method call by B class object
let b = new Shivam();
b.displayMsg();

// method call by C class object
let c = new Nurul();
c.displayMsg();
