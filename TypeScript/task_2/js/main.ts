// Create an interface DirectorInterface with 3 expected methods:
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

// Create the TeacherInterface with 3 expected methods:
interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

//  Create the Director class that implements the DirectorInterface:
class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

// Create the Teacher class that implements the TeacherInterface:
class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}
	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

// Create a function createEmployee that accepts a union of the two classes and returns a new instance of the class:
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}

// Function isDirector
function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
	return employee instanceof Director;
}

// Function executeWork
function executeWork(employee: DirectorInterface | TeacherInterface): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

// Write a string literal for the values Math or History
type Subjects = 'Math' | 'History';

// Function teachClass that accepts a string literal as arguments:
function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
		return 'Teaching Math';
	} else if (todayClass === 'History') {
		return 'Teaching History';
	}
}

// Test with an argument Math
console.log(teachClass('Math'));

// Test with an argument History
console.log(teachClass('History'));

// Test with an Director
const director = new Director();
console.log(executeWork(director));

// Test with an Teacher
const teacher = new Teacher();
console.log(executeWork(teacher));

// Test cases
console.log(createEmployee(200) instanceof Teacher ? 'Teacher' : 'Director');
console.log(createEmployee(1000) instanceof Director ? 'Director' : 'Teacher');
console.log(createEmployee('$500') instanceof Director ? 'Director' : 'Teacher');

