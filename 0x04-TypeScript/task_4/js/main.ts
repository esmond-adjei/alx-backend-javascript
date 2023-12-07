export const cpp = new Subjects.Cpp();
export const react = new Subjects.React();
export const java = new Subjects.Java();

export const cTeacher: Subjects.Teacher = {
    firstName: 'Esmond',
    lastName: 'Adjei',
    experienceTeachingC: 10,
}

// For Cpp subject
console.log('Cpp:');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log('\nJava:');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log('\nReact:');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());