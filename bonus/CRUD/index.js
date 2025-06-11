//^selectors
//to get the input fields from html
var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productImageInput = document.getElementById("productImage");
var productDiscriptionInput = document.getElementById("productDiscription");

//to get button from html
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");

//^storing data
//to store the products
var productList = [];

//check if there is data in local storage restore and display them
if (localStorage.getItem("allProducts")) {
  productList = JSON.parse(localStorage.getItem("allProducts"));
  displayProducts(productList);
}

//^add==========================
function addProuduct() {
  console.log();

  //to get the input from the user
  var prouduct = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    discription: productDiscriptionInput.value,
    //handling the image input
    image:
      productImageInput.files.length > 0
        ? productImageInput.files[0].name
        : "1.jpg", //default image
  };

  //to push the product to the list
  productList.push(prouduct);

  //to display the product in the console
  console.log(productList);
  //save data to local storage
  localStorage.setItem("allProducts", JSON.stringify(productList));

  //to display the products
  displayProducts(productList);

  //to clear the input fields
  resetProuduct();
}

//^reset==========================
//to clear the input fields
function resetProuduct() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDiscriptionInput.value = "";
  productImageInput.value = "";
}

//^display==========================
function displayProducts(targetElement) {
  var productsContainer = "";
  for (var i = 0; i < targetElement.length; i++) {
    productsContainer += `  <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card">
                        <div>
                            <img src="images/${
                              //to set the image of the product
                              targetElement[i].image
                            }" class="card-img-top" alt="image">
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">${targetElement[i].name}</h5>
                                <p class="card-text">${
                                  targetElement[i].discription
                                }
                                </p>
                                <h4 class="h6"><span class="fw-bold">category: </span> ${
                                  targetElement[i].category
                                }</h4>
                                <h5 class="h6"><span class="fw-bold">price: </span>${
                                  targetElement[i].price
                                } EGP</h5>
                        </div>
                        <div class="card-footer">
                            <button onclick="setDataToUpdate(${
                              //to update the broduct while searching
                              targetElement.length < productList.length
                                ? targetElement[i].oldIndex
                                : i
                            })" class="btn btn-warning text-light me-2">update</button>
                            <button onclick="deleteProudcts(${
                              //to delete the broduct while searching
                              targetElement.length < productList.length
                                ? targetElement[i].oldIndex
                                : i
                            })" class="btn btn-danger text-light">Delete</button>
                        </div>
                    </div>
                </div>`;
  }
  document.getElementById("rowProducts").innerHTML = productsContainer;
}

//^delete==========================
function deleteProudcts(index) {
  //to remove the product from the list
  productList.splice(index, 1);

  //to save the changes to the local storage
  localStorage.setItem("allProducts", JSON.stringify(productList));

  displayProducts(productList);
}

//^update==========================
var ubdateadIndex;
//to update the product
function setDataToUpdate(index) {
  ubdateadIndex = index;

  //to set the input fields to the product data
  productNameInput.value = productList[index].name;
  productPriceInput.value = productList[index].price;
  productCategoryInput.value = productList[index].category;
  productDiscriptionInput.value = productList[index].discription;

  //to set the update button to be visible by classList
  addBtn.classList.add("d-none");
  updateBtn.classList.remove("d-none");
}
function updateProudcts() {
  //to change the data of the brouct
  productList[ubdateadIndex].name = productNameInput.value;
  productList[ubdateadIndex].price = productPriceInput.value;
  productList[ubdateadIndex].category = productCategoryInput.value;
  productList[ubdateadIndex].discription = productDiscriptionInput.value;

  //handling update of the image
  if (productImageInput.files.length > 0) {
    productList[ubdateadIndex].image = productImageInput.files[0].name;
  }

  //to switch back buttons
  updateBtn.classList.add("d-none");
  addBtn.classList.remove("d-none");

  //save data to local storage after updating
  localStorage.setItem("allProducts", JSON.stringify(productList));

  //to display the products
  displayProducts(productList);

  //to clear the input fields
  resetProuduct();
}

//^search==========================
function searchProducts(searchvalue) {
  //aray to store the filtered products
  var filteredProducts = [];

  for (var i = 0; i < productList.length; i++) {
    //to check if the product name includes the search value
    if (productList[i].name.toLowerCase().includes(searchvalue.toLowerCase())) {
      //to store
      productList[i].oldIndex = i;

      //to push the product to the filtered products array
      filteredProducts.push(productList[i]);

      // to display the filtered products
      displayProducts(filteredProducts);
    }
  }
}
