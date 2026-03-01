const products = [
  { name: "Laptop", inStock: true },
  { name: "Phone", inStock: true },
  { name: "Tablet", inStock: false },
  { name: "Monitor", inStock: false },
];
const findProducts = products.find(pr=> pr.inStock === false);
console.log(findProducts);