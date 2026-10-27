import { Service } from '@angular/core';
import { student } from '../model/student';

@Service()
export class StudentService {
    private students : Student[]=[
    {
        id:101,
        student_name:"saad"
        Student:"angular"
    },

    {
        id:101,
        student_name:"asad"
        student_subject:"javascript"
    },

    ]
    getStudents(): Student[] {
  return this.students;
}
}
