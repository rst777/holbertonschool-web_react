// Define the Teacher interface
interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience: number; // Optional property
	location: string;
	[key: string]: any; //Allows any additional property with any type
}
interface StudentClass {
	firstName: string; //Add the firstName property
	lastName: string; //Add the lastName property
	workOnHomework(): string; //Add the workOnHomework method
	displayName(): string; //Add the displayName method
}

//Define the Directors interface that extented the Teacher
interface Directors extends Teacher {
	numberOfReports: number; //Add the numberOfReports property
}

// Define the printTeacher function
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

//Define the interface for the constructor of the class
interface StudentClassConstructor {
	new(firstName: string, lastName: string): StudentClass;
}

// Create a teacher object based on the interface
const Teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false, //You can add any additional property
	yearsOfExperience: 5, //Optional property
};

//Create a director object based on the Director interface
const Director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
	yearsOfExperience: 8, // Optional property added
};
//Implement the class based on the interface
class Student implements StudentClass {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	workOnHomework() {
		return 'Currently working';
	}
	displayName() {
		return this.firstName;
	}
}

//Define the function based on the interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName[0]}. ${lastName}`;

};
//Create an instance of the class
const student1 = new Student('John', 'Doe');

//Print the object
console.log(Teacher3);
console.log(Director1);
console.log(printTeacher("John", "Doe")); //Should print J. Doe
console.log(student1.workOnHomework()); //Should print 'Currently working'
console.log(student1.displayName()); //Should print 'John'
