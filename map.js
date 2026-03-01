const numbers = [1,2,3,4,5,6]
const doubleIt = num => num*2;
const doubled = numbers.map(doubleIt);
// console.log(doubled);

const squared = numbers.map(num => num*num);
// console.log(squared);

const products = [
    {name:'Laptop', price: 22000},
    {name: 'Mobile', price: 15000},
    {name: 'PC', price: 20000}
];
const prices = products.map(pd=>pd.price*2);
// console.log(prices);

const names = products.map((pd , index) =>{
    const Names =  pd.name.toUpperCase();
    // console.log(index, Names);
    return Names
})
// console.log(names); 


const fruits = ['Apple','Banana','Litchi'];
const fruit = fruits.map(fr=>fr);
console.log(fruit);

