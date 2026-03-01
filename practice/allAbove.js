const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumber = numbers.filter(nmbr=> nmbr%2===0);
// console.log(evenNumber); return [2,4,6,8]

const mapedSquared = evenNumber.map(numbr=> numbr*numbr);
// console.log(mapedSquared); return [4,16,36,64]

const firstValue = mapedSquared.find(nm=>nm>50);
// console.log(firstValue); return ->64

const allsquareNumber = mapedSquared.forEach(number=>{
    console.log(number);
})