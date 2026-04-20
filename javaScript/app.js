// let numbers =[1,2,3,4,5]
// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);
// console.log(numbers[4]);


// //Normal funtion with no parameter
// function greet()
// {
//     console.log("Hello World!");
// }
// greet();


// //normal function
// function multiply(a,b)
// {
//     return a*b;
// }
// console.log(multiply(2,3));


// //Function Expression
// let divide = function(a,b)
// {
//     return a/b;
// };
// console.log(divide(10,2));

// //Normal Function With Expression
// let add = function(a,b)
// {
//     return a+b;
// };
// console.log(add(5,7));


//ARROW FUNCTION

// //Arrow Function with no parameter
// let sayHi = () => console.log("Hi!");
// sayHi();


//Arrow Function with single parameter
// let square = x => x*x ;
// console.log(square(4));

//Arrow Function with one Parameter
// const greetUser = (name) => {

//     console.log(`Hello, ${name}!`);
// }
// greetUser("Alice");




//Map onn array
//map creates a new array by applying a
//Function to each element of the original array
// let newarray =[1,2,3,4,5];
// let squaredArray = newarray.
// map((num) => num*num);
// console.log(squaredArray);

// .map() is an array method
// It loops through each element
// Applies a function to each element
// Returns a new array


// let newArray = [1,2,3,4,5];
// let SquaredArray = newArray.map((num) => num * 5);
// console.log(SquaredArray);       // [5,10,15,20,25]

// // Filter on array
// // filter creates a new array with all elements that pass the test implemented by the provided function
// let evenNumbers = [1,2,3,4,5];
// let filteredEvenNumbers = evenNumbers.filter(num => num % 2 === 0);
// console.log(filteredEvenNumbers);         // [2,4]


// // reduce an array
// let sum = [1,2,3,4,5];
// let total = sum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(total);       // 15

// // map reduce filter on object student marks
// let students = [
//     { name: "Alice", marks: 85 },
//     { name: "Bob", marks: 92 },
//     { name: "Charlie", marks: 78 }
// ];

// // map to get marks of all students
// let marks = students.map(student => student.marks);
// console.log(marks);          // [85,92,78]
// // map to get names of all students
// let names = students.map(student => student.name);
// console.log(names);         // ["Alice", "Bob", "Charlie"]
// // filter to get students with marks greater than 80
// let topStudents = students.filter(student => student.marks > 80);
// console.log(topStudents);       // [ { name: 'Alice', marks: 85 }, { name: 'Bob', marks: 92 } ]
// // reduce to get total marks of all students
// let totalMarks = students.reduce((acc,student) => acc + student.marks, 0);
// console.log(totalMarks);        // 255