var btnsearch = document.querySelector(".button-search");
var popup = document.querySelector(".search-form");

btnsearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("btn-close");
});