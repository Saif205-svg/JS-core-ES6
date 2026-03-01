const numbers = [10,20,51,23,40,45,12];
const evenNumber = numbers.filter(num=>num%2===0);
// console.log('This is even number from "numbers" array ' ,evenNumber);

const friends = ['Naim','Sajid','Sabiha','Iqbal','Sojib'];
const firstLetter = friends.filter(fr=>fr[0]==='S');
console.log(firstLetter);

const students = [
    {name: 'Karim', age: 21},
    {name: 'Sajjad', age: 24},
    {name: 'Rakib', age: 45},
    {name: 'Bulbul', age: 15},
    {name: 'Hasib', age: 18},
    {name: 'Karimullah', age: 20},
    {name: 'Sabib', age: 14}
];
const olderStudent = students.filter(st=>st.age>=20);
console.log(olderStudent);

// find() method | find() return the first element of array when condition true. filter return only single value not an array.
const number = [1,2,3,4,7,8,6];
const evens = number.find(num=>num%2===0);
console.log(evens); //return 2 

const nums = [1,2,3,5];
const smallest = nums.find(num=>num>10);
console.log(smallest); //return undefined

//reduce() method
const Numbers = [1,2,3,4,5,6];
const sum = Numbers.reduce((acc, corr) => acc+corr, 0);
console.log(sum);