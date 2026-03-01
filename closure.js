function outerFunction(){
    function innerFunction(){
        console.log('This is Inner Function');
    }
    return innerFunction;
} 
const result = outerFunction();
// result();

function counter(){
    let count = 0
    function increment(){
        count++;
        console.log('Count of the number',count);
    }
    return increment;
}
const incrementNumber = counter();
incrementNumber();