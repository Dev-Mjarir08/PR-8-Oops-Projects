class User {
    constructor(name, email, role = 'user') {
        this.name = name;
        this.email = email;
        this.role = role;
        this.isActive = true;
        this.createdAt = new Date();
    }

    deactivate() {
        this.isActive = false;
        console.log(`${this.name} has been deactivated`);
    }

    activate() {
        this.isActive = true;
        console.log(`${this.name} has been activated`);
    }

    getInfo() {
        return `${this.name} (${this.email}) - ${this.role}`;
    }
}

// Usage in real application
const admin = new User('John Doe', 'john@company.com', 'admin');
const customer = new User('Jane Smith', 'jane@email.com');

console.log(admin.getInfo()); // John Doe (john@company.com) - admin
customer.deactivate(); // Jane Smith has been deactivated