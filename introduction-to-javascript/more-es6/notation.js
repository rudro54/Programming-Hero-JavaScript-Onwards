const student = {
    name: 'kolim uddin',
    age: 15,
    class: 'ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },

}

const marks = student.marks;
const math = student.marks.math;

const chemistry = student['marks']['chemistry'];
console.log(chemistry);
const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);