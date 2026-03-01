const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 45 },
  { name: "Charlie", score: 72 },
  { name: "Diana", score: 55 },
  { name: "Eve", score: 91 },
];

const selectedStudent = students.filter(student=>student.score>=60);
console.log(selectedStudent);