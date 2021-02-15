// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json()
  .then( data => {

  //var arr = JSON.parse(localStorage.getItem("array"));
  
  data.forEach( function(item, index) {
    
    let list = document.getElementById('product-list');
    window.localStorage.setItem(String(index), JSON.stringify(item)); 
    let product = document.createElement('product-item');
    let title = product.shadowRoot.getElementById('title');
    let img = product.shadowRoot.getElementById('img');
    let price = product.shadowRoot.getElementById('price');
    title.innerHTML = item.title; 
    img.src = item.image;
    price.innerHTML = '$' + item.price; 
    list.appendChild(product);
  });
  }));
}); 


