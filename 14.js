var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

console.log("Before:", student);
delete student.rollno;
console.log("After:", student);