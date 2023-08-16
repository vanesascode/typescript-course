//Typescript requires an index signature if you attempt to access an object property dynamically:

interface MyObject {
  [key: string]: any; // Index signature
}

const obj: MyObject = {
  name: "John",
  age: 25,
};

const propertyName = "name";
const propertyValue = obj[propertyName]; // Accessing property dynamically

console.log(propertyValue); // Output: "John"

//////////////////////////////////////

interface Product {
  id: number;
  product: string;
  price: string;
  [key: string]: any;
}

const products: Product[] = [
  { id: 1, product: "t-shirt", price: "12.99", color: "red" },
  { id: 2, product: "skirt", price: "19.99", size: "large" },
  { id: 3, product: "skirt", price: "12.99", size: "medium" },
  { id: 4, product: "shoes", price: "19.99", color: "green" },
  { id: 5, product: "trousers", price: "7.99", color: "blue" },
  { id: 5, product: "trousers", price: "20.99", color: "black" },
  { id: 5, product: "shoes", price: "20.99", size: "small" },
  { id: 5, product: "t-shirt", price: "7.99", color: "red" },
];

function filterProducts() {
  const propertyInput = document.getElementById("property") as HTMLInputElement;
  const valueInput = document.getElementById("value") as HTMLInputElement;
  const property = propertyInput.value.toLowerCase();
  const value = valueInput.value.toLowerCase();
  const filteredProducts = filterProductsByProperty(products, property, value);
  renderProducts(filteredProducts);
  propertyInput.value = "";
  valueInput.value = "";
}

function filterProductsByProperty(
  products: Product[],
  property: string,
  value: any
): Product[] {
  return products.filter((product) => product[property] === value);
}

function renderProducts(products: Product[]) {
  const productList = document.getElementById("productList");
  if (!productList) {
    return;
  }

  productList.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.textContent = `Product: ${product.product} - Price: $${product.price}`;
    productList.appendChild(li);
  });
}
