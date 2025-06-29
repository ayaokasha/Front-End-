function getPost() {
  var myHttp = new XMLHttpRequest();

  myHttp.open("GET", "https://jsonplaceholder.typicode.com/posts");

  myHttp.send();

  myHttp.addEventListener("load", function () {
    console.log(JSON.parse(myHttp.response));
  });

  myHttp.addEventListener("error", function () {
    console.log("error in Apis");
  });
}
getPost();
