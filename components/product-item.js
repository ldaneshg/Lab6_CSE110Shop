// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = 
      '<link rel="stylesheet" href="./styles/styles.css" /><li class="product"><img id="img" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" ' + 
      'alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200> ' +
      '<p class="title" id="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p> <p class="price" id="price">$109.95</p>'
      + '<button onclick="alert("Added to Cart!")">Add to Cart</button> </li>';
  }
}

customElements.define('product-item', ProductItem); 

