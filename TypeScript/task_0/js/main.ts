// Define the Student interface
interface student {
	firstName : string;
	lastName : string;
	age : number;
	location : string;

}
// Create two student objects
const student1: student = {
	firstName: 'Alice',
	lastName: 'Johnson',
	age: 20,
	location: 'New York'
};

const student2: student = {
	firstName: 'Bob',
	lastName: 'Smith',
	age: 22,
	location: 'Los Angeles'
};

//Store students in an array
const studentsList: student[] = [student1, student2];

// Function to render the table
function renderTable(students: student[]): void {
	// Create the table element
	const table = document.createElement("table");
	table.style.border = "1px solid black";
	table.style.borderCollapse = "collapse";
	table.style.width = "50%";
	table.style.margin = "20px auto";
	table.style.textAlign = "left";

	// Create the table header row
	const headerRow = document.createElement("tr");
	const headers = ["First Name", "Location"];
	headers.forEach((headerText) => {
	  const headerCell = document.createElement("th");
	  headerCell.textContent = headerText;
	  headerCell.style.border = "1px solid black";
	  headerCell.style.padding = "8px";
	  headerRow.appendChild(headerCell);
	});
	table.appendChild(headerRow);

	// Add rows for each student
	students.forEach((student) => {
	  const row = document.createElement("tr");

	  // First Name cell
	  const firstNameCell = document.createElement("td");
	  firstNameCell.textContent = student.firstName;
	  firstNameCell.style.border = "1px solid black";
	  firstNameCell.style.padding = "8px";
	  row.appendChild(firstNameCell);

	  // Location cell
	  const locationCell = document.createElement("td");
	  locationCell.textContent = student.location;
	  locationCell.style.border = "1px solid black";
	  locationCell.style.padding = "8px";
	  row.appendChild(locationCell);

	  table.appendChild(row);
	});

	// Append the table to the body
	document.body.appendChild(table);
  }

  // Render the table with the student list
  renderTable(studentsList);
