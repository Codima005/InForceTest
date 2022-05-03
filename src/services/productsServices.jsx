
const API_URL = "http://localhost:3000/";

export function getProducts() {
  return fetch(API_URL + "Products").then((res) => res.json());
}

export function getProduct(id) {
  return fetch(API_URL + "Products/" + id).then((res) => res.json());
}

function getNewProduct(product) {
  return {
    imageUrl: "",
    name: product.name,
    count: product.count,
    size: {
      width: product.width,
      height: product.height
    },
    weight: product.weight,
    comments: []
  }
}

export function createProduct(item) {
 
  const newProduct = getNewProduct(item)
  return fetch(API_URL + "Products/", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());

}

export function updateProducts(item) {
  return fetch(API_URL + "products/", {
    method: "PUT",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function deleteProduct(id) {
  return fetch(API_URL + "products/" + id, {
    method: "DELETE",
  }).then((res) => res.json());
}


