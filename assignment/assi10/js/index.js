var bookInputName = document.getElementById("bookMark");
var bookInputUrl = document.getElementById("website");

var bookList = [];

if (localStorage.getItem("allBooks")) {
  bookList = JSON.parse(localStorage.getItem("allBooks"));
  displayBooks(bookList);
}
//^add====================
function addBook() {
  if (
    isValid(inputRegex.name, bookInputName) &&
    isValid(inputRegex.url, bookInputUrl)
  ) {
    var books = {
      name: bookInputName.value,
      url: bookInputUrl.value,
    };

    bookList.push(books);

    console.log(bookList);

    localStorage.setItem("allBooks", JSON.stringify(bookList));

    displayBooks(bookList);
    resetBook();
    Swal.fire({
      icon: "success",
      title: "Book is Added!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please fill all fields correctly!",
    });
  }
}
function resetBook() {
  bookInputName.value = "";
  bookInputUrl.value = "";

  bookInputName.classList.remove("is-valid", "is-invalid");
  bookInputUrl.classList.remove("is-valid", "is-invalid");
}

//^display====================
function displayBooks(targetBook) {
  var booksContainer = "";
  for (var i = 0; i < targetBook.length; i++) {
    booksContainer += `
      
<tr>
<th scope="row" class="py-3 fw-lighter">${i + 1}</th>
<td class="py-3">${targetBook[i].name}</td>

<td><button type="button" id="visitBtn" onclick="visitWebsite(${
      targetBook.length < bookList.length ? targetBook[i].oldIndex : i
    })" class="btn btn-success"><i
class="fa-solid fa-eye"></i>
 Visit</button></td>
 
<td><button type="button" id="deleteBtn" onclick="deleteBook(${
      targetBook.length < bookList.length ? targetBook[i].oldIndex : i
    })" class="btn btn-danger"><i
class="fa-solid fa-trash-can"></i>
 Delete</button></td>
</tr>         
    `;
    document.getElementById("tableBody").innerHTML = booksContainer;
  }
}

//^visit====================
function visitWebsite(index) {
  var websiteUrl = bookList[index].url;

  window.open(websiteUrl, "_blank");
}

//^delete====================
function deleteBook(index) {
  bookList.splice(index, 1);

  localStorage.setItem("allBooks", JSON.stringify(bookList));

  displayBooks(bookList);
}

//^validation================

var inputRegex = {
  name: /^[a-zA-Z\s.]{2,}$/,
  url: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w- .\/?%&=]*)?$/,
};

function isValid(regex, input) {
  if (regex.test(input.value)) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");

    input.nextElementSibling.classList.replace("d-none", "d-block");
    input.nextElementSibling.classList.replace("d-block", "d-none");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");

    input.nextElementSibling.classList.replace("d-block", "d-none");
    input.nextElementSibling.classList.replace("d-none", "d-block");

    return false;
  }
}

//^dark mode====================
var toggleBtn = document.getElementById("toggleModeBtn");
var body = document.body;

// Check localStorage for last mode
if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.add("light-mode");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Save the mode
  var mode = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("mode", mode);
});
