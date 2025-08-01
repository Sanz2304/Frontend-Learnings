// Inheritance - is a mechanism that allows us to create a new class that inherits the properties and methods of an existing class.
// It has parent and child/sub/derived classes.
// To use inheritance, we need to use the extends keyword.

// Parent class
class Learner {
    constructor(userName, userAge) {
        this.userName = userName;
        this.userAge = userAge
    }
    bio() {
        return `Hi ${this.userName}, your age is ${this.userAge}`
    }
}

const learner1 = new Learner('Santhosh', 25)
// console.log(learner1.bio());



// Child class
class SchoolStudent extends Learner{ // This is a child class that inherits the properties and methods of the parent class using the extends keyword.
    constructor(userName, userAge, standard){ // This is a constructor of the child class. Here we are passing the properties of the parent class to the child class using the super keyword.
        super(userName, userAge) // This is a super keyword that calls the constructor of the parent class.
        this.standard = standard
    }

    studentIntro(){
        return `Hi ${this.userName}, Am studying ${this.standard} standard`
    }
}
const schoolStudent = new SchoolStudent('Sheetal', 14, '8th')

// console.log(schoolStudent.bio()); // This will call the bio method of the parent class.
// console.log(schoolStudent.studentIntro()); // This will call the studentIntro method of the child class along with the properties of the parent class.



// Multi-level inheritance
class CollageStudent extends Learner {
    constructor(userName, userAge, year){
        super(userName, userAge)
        this.year = year
    }

    collageStudentIntro(){
        return `Hi am ${this.userName}, pursuing ${this.year} year in collage`
    }
}

const collageStudent = new CollageStudent('Buttu', 21, '3rd');
// console.log(collageStudent.bio()); // This will call the bio method of the parent class.
// console.log(collageStudent.collageStudentIntro()); // This will call the collageStudentIntro method of the child class along with the properties of the parent class.



// Multiple inheritance - is a mechanism that allows us to create a new class that inherits the properties and methods of multiple existing classes.
// To use multiple inheritance, we need to use the extends keyword multiple times.


// class Student extends SchoolStudent, CollageStudent{ // This is a child class that inherits the properties and methods of the parent class using the extends keyword.
//     constructor(userName, userAge, standard, year){
//         super(userName, userAge, standard) // This is a super keyword that calls the constructor of the parent class.
//         this.year = year
//     }

//     studentIntro(){
//         return `Hi ${this.userName}, Am studying ${this.standard} standard and ${this.year} year in collage`
//     }
// }

// const student = new Student('Santhosh', 25, '8th', '3rd');
// console.log(student.studentIntro());







