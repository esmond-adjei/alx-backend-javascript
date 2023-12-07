namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Heare is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this._teacher?.experienceTeachingJava) {
                return `Available Teacher: ${this._teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}