// implementation of teacher
interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

// implementation of director
interface Directors extends Teacher {
	numberOfReports: number;
}

// implementation of teacher
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName[0].toUpperCase()}. ${lastName}`;
}

// implementation of student
interface StudentConstructor {
	new (firstName: string, lastName: string): StudentClass;
}
  
interface StudentClass {
	workOnHomework(): string;
	displayName(): string;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentClass {
	private firstName: string;
	private lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
};

// run file
if (require.main !== module) {
	const director1: Directors = {
		firstName: 'Esmond',
		lastName: 'Adjei',
		location: 'London',
		fullTimeEmployee: true,
		numberOfReports: 17,
	};
	
	const teacher3: Teacher = {
		firstName: 'John',
		fullTimeEmployee: false,
		lastName: 'Doe',
		location: 'London',
		contract: false,
	};

	const student: StudentClass = new StudentClass("Brian", "Mensah")
		
	console.log(teacher3);
	console.log(director1);
	console.log(printTeacher(teacher3.firstName, teacher3.lastName));
	console.log(printTeacher(director1.firstName, director1.lastName));
	console.log(student.displayName());
	console.log(student.workOnHomework());
}