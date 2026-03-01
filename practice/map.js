const prices = [100,250,80,400,60];
const discountPrice = prices.map(price=>price-(price/100*20));
console.log(discountPrice); 