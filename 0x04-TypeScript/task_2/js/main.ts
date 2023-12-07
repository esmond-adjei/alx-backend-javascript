interface DirectorInterface {
	workFromHome: () => string;
	getCoffeeBreak: () => string;
	workDirectorTasks: () => string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome() {
		return "Working from home";
	}

	getCoffeeBreak() {
		return "Getting a coffee break"
	}

	workDirectorTasks() {
		return "Getting to director tasks"
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return "Cannot work from home";
	}

	getCoffeeBreak() {
		return "Cannot have a break"
	}

	workTeacherTasks() {
		return "Getting to work"
	}
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    return 'Teaching History';
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}

const isDirector = (employee: any): employee is Director => {
	return (employee as Director).workDirectorTasks !== undefined;
}

const executeWork = (employee: Director | Teacher) => {
	return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

// test
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$1000"));
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
console.log(teachClass('Math'));
console.log(teachClass('History'));