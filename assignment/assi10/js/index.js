var bookInputName = document.getElementById("bookMark");
var bookInputUrl = document.getElementById("website");

var bookList = [];

if (localStorage.getItem("allBooks")) {
  bookList = JSON.parse(localStorage.getItem("allBooks"));
  displayBooks(bookList);
}
//^add====================
function addBook() {
  var books = {
    name: bookInputName.value,
    url: bookInputUrl.value,
  };

  bookList.push(books);

  console.log(bookList);

  localStorage.setItem("allBooks", JSON.stringify(bookList));

  displayBooks(bookList);
  resetBook();
}
function resetBook() {
  bookInputName.value = "";
  bookInputUrl.value = "";
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
