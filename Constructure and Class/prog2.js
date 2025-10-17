class student {
    constructor(name, age) {
        this.name = name
        this.age= age
}
displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);  
    console.log("--------------------");
}
}


let student1 = new student("John", 20);
let student2 = new student("Jarir", 23);
let student3 = new student("Nurul", 17);
let student4 = new student("Shivam" , 20);
let student5 = new student("Pratham" , 21);
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();
student4.displayInfo();
student5.displayInfo();