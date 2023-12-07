namespace Subjects {
    export class Subject {
        protected _teacher: Teacher | undefined;

        setTeacher(teacher: Teacher): void {
            this._teacher = teacher;
        }
    }
}