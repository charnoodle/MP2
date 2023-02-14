const cost = new Map([
    ["rideAllYouCan", 899],
    ["fastPass", 999],
    ["regular", 699],
    ["basic", 499],
    ["groupPackage", 3499],
    ["couplePackage", 1899],
  ]);
  
  const table = document.getElementById("productTable");
  const productSelect = document.getElementById("productSelect");
  const quantityInput = document.getElementById("quantityInput");
  const addButton = document.getElementById("addButton");
  
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
  });
  