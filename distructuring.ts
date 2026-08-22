type Student = {
  name: string;
  age: number;
  marks: number;
};

const student: Student = {
  name: "Siam",
  age: 22,
  marks: 85
};

const { name: studentName, age: studentAge, marks: studentMarks } = student;

console.log(studentName);