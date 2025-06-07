var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productImageInput = document.getElementById("productImage");
var productDiscriptionInput = document.getElementById("productDiscription");

var productList = [];

function addProuduct() {
  var prouduct = {
    name: productNameInput.Value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    discription: productDiscriptionInput.value,
    image: "12.",
  };
  productList.push(prouduct);

  resetProuduct();
}

function resetProuduct() {
  productNameInput.Value = "";
  productPriceInput.Value = "";
  productCategoryInput.Value = "";
  productCategoryInput.Value = "";
}
