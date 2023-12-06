interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0].toUpperCase()}. ${lastName}`;
}

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
        
    console.log(teacher3);
    console.log(director1);
    console.log(printTeacher(teacher3.firstName, teacher3.lastName));
    console.log(printTeacher(director1.firstName, director1.lastName));
    
}