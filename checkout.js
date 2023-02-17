//Js for Your Cart

const cost = new Map([
  ["rideAllYouCan", 899],
  ["fastPass", 999],
  ["regular", 699],
  ["basic", 499],
  ["groupPackage", 3499],
  ["couplePackage", 1899],
]);

const table = document.getElementById("productTable");
const cartTable = document.getElementById("cartTable");
const productSelect = document.getElementById("productSelect");
const quantityInput = document.getElementById("quantityInput");
const addButton = document.getElementById("addButton");
const cart = [];

addButton.addEventListener("click", function(event) {
  event.preventDefault();
  const product = productSelect.value;
  const quantity = quantityInput.value;

  if (product === "" || quantity === "") {
    alert("Please select a product and enter its quantity");
    return;
  }

  const price = cost.get(product);
  const total = price * quantity;

  const row = table.insertRow();
  const productCell = row.insertCell(0);
  const quantityCell = row.insertCell(1);
  const priceCell = row.insertCell(2);
  const totalCell = row.insertCell(3);

  productCell.innerHTML = product;
  quantityCell.innerHTML = quantity;
  priceCell.innerHTML = price;
  totalCell.innerHTML = total;

  // add the product to the cart
  cart.push({ product: product, quantity: quantity, price: price });

  // clear the input fields
  // productSelect.value = "";
  // quantityInput.value = "";

  // update the cart table
  const cartRow = cartTable.insertRow();
  const cartProductCell = cartRow.insertCell(0);
  const cartQuantityCell = cartRow.insertCell(1);
  const cartPriceCell = cartRow.insertCell(2);
  const cartTotalCell = cartRow.insertCell(3);

  cartProductCell.innerHTML = product;
  cartQuantityCell.innerHTML = quantity;
  cartPriceCell.innerHTML = price;
  cartTotalCell.innerHTML = total;
});
  
//Js for the QR Code Generator for tickets
var qrcode = new QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Why did you scan me?")
function generateQr(){  qrcode.makeCode(document.querySelector("input").value)
}