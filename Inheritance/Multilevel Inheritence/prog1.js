class Employee {
    constructor(name, age, id, email) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.email = email;
    }

    getDetails() {
        return `Name: ${this.name},\nAge: ${this.age},\nID: ${this.id},\nEmail: ${this.email}`;
    }
}



class Department extends Employee {
    constructor(name, age, id, email, deptName, deptId, deptManager, deptPost) {
        super(name, age, id, email);
        this.deptName = deptName;
        this.deptId = deptId;
        this.deptManager = deptManager;
        this.deptPost = deptPost;
    }

    getDepartmentDetails() {
        return `${super.getDetails()}\nDepartment Name: ${this.deptName},\nDepartment ID: ${this.deptId},\nDepartment Manager: ${this.deptManager},\nDepartment Post: ${this.deptPost}`;
    }
}


class empSalarydetails extends Department {
    constructor(name, age, id, email, deptName, deptId, deptManager, deptPost, baseSalary, bonusPercentage, hra, diwaliBonus) {
        super(name, age, id, email, deptName, deptId, deptManager, deptPost);
        this.baseSalary = baseSalary;
        this.bonusPercentage = bonusPercentage;
        this.hra = hra;
        this.diwaliBonus = diwaliBonus;
    }

    calculateSalary() {
        const bonus = this.baseSalary * (this.bonusPercentage / 100);
        return this.baseSalary + bonus + this.hra + this.diwaliBonus;
    }

    displaySalaryDetails() {
        return `Base Salary: ${this.baseSalary},\nHRA: ${this.hra},\nDiwali Bonus: ${this.diwaliBonus},\nTotal Salary: ${this.calculateSalary()}`;
    }

    empReportCard() {
        return `${super.getDepartmentDetails()}\nBase Salary: ${this.baseSalary}\nTotal Salary: ${this.calculateSalary()}`;
    }
}



const empSalary1 = new empSalarydetails(
    'Jarir', 23, `${Date.now()}`, 'jarir@gmail.com',
    'IT Department', 'D-101', 'Mr. Shaikh', 'Full Stack Developer',
    45000, 10, 2000, 1000
);

console.log(empSalary1.empReportCard());
