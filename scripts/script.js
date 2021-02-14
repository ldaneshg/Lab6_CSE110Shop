// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  localStorage.setItem("array", JSON.stringify(response));

  var arr = JSON.parse(localStorage.getItem("array"));
});
