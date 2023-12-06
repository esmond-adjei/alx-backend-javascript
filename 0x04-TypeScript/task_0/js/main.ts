interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "Accra"
};

let student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Kumasi"
};

let studentsList: Student[] = [student1, student2];

// Render a table
let table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach(student => {
    let row = table.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
