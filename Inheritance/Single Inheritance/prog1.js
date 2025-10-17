class RedandWhite {
    constructor(branch, manager, facultes, counsellor) {
        this.branch = branch;
        this.manager = manager;
        this.faculties = facultes;
        this.counsellor = counsellor;
    }

    branchDetails() {
        return `${this.branch} branch has been Managed by ${this.manager}`;
    }

    facultiesDetails() {
        return `${this.faculties} are the faculties of this branch`
    }
    counsellorDetails() {
        if (!this.counsellor) {
            return `You can contact the manager ${this.manager} for the course details.`;
        }
        return `${this.counsellor} is the counsellor of this branch.`;
    }

}
class StudentDetails extends RedandWhite {
    constructor(name, age, course, fees, manager, faculties, counsellor) {
        super(manager, faculties, counsellor,);
        this.name = name;
        this.age = age;
        this.course = course;
        this.fees = fees;
    }
    studentInfo() {
        return `${this.name} is ${this.age} years old and has taken ${this.course} course with fees of ${this.fees}`;
    }
    payFees(amount) {
        if (amount < this.fees) {
            throw new Error(`Please pay the full amount of ${this.fees}`);
        }
        this.fees -= amount;
        console.log(`${this.name} has paid ${amount}. Remaining fees: ${this.fees}`);
    }
    getCourseDetails() {
        if (!this.course) {
            throw new Error(`Please contact the counsellor ${this.counsellor} for course details`);
        }
        return `${this.course} course details can be obtained from the counsellor ${this.counsellor}`;
    }
}

// Example usage:

console.log('----------------------- Branch Details -----------------------');
const branch1 = new RedandWhite(
    'Rwnv1', 'Yamini MIstry ,'
    , 'Dhaval Leelawala  Pawan Prajaparti' , 'Mihir  Mistry');
console.log(branch1.branchDetails());
console.log(branch1.facultiesDetails());
console.log(branch1.counsellorDetails());

console.log('----------------------- Student Details -----------------------');

const student1 = new StudentDetails('Yamini MIstry ,', 'Dhaval Leelawala, Pawan Prajaparti', '');
student1.name = 'Jarir Multani';
student1.age = 23;
student1.course = 'Full Stack Development';
student1.fees = 110000;
console.log(student1.studentInfo());
student1.payFees(110000);
console.log(student1.getCourseDetails());