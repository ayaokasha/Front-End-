var subImg = document.querySelectorAll(".imgs img");
var mainImg = document.getElementById("main-img");

for (var i = 0; i < subImg.length; i++) {
  subImg[i].addEventListener("click", function (e) {
    var imgScr = e.target.getAttribute("src");
    mainImg.setAttribute("scr", imgScr);
  });
}
