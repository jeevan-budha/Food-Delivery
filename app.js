
var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cartList = document.querySelector(".card-list");
const cartPieceList = document.querySelector(".cart-list");



cartIcon.addEventListener("click", () => {
  cartTab.classList.add("cart-tab-active");
});

closeBtn.addEventListener("click", () => {
  cartTab.classList.remove("cart-tab-active");
});

let prodcutList = [];
let cartProduct =[];

const showCart = () => {
  prodcutList.forEach(product => {

    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");
    orderCard.innerHTML = `
     <div class="card-image">
        <img src="${product.image}" alt="">
      </div>
      <h4>${product.name}</h4>
      <h4 h4 class="price">${product.price}</h4>
      <a href="#" class="btn card-btn">Add to Cart</a>`;

      cartList.appendChild(orderCard);

      const cardBtn = orderCard.querySelector(".card-btn");
      cardBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        addToCart(product);
      })
  });
}

const addToCart =(product)=>{
  const existingProduct =cartProduct.find(item=>item.id===product.id);
  if(existingProduct){
    alert("Item Already in your cart !");
    return;
  }
  cartProduct.push(product);

  const cartItem = document.createElement("div");
  cartItem.classList.add("item");

  cartItem.innerHTML=`
  <div class="item-image">
     <img src="${product.image}" alt="">
   </div>
    <div class="detail">
      <h4>${product.name}</h4>
      <h4 class="item-total">${product.price}</h4>
    </div>
    <div class="flex">
      <a href="#" class="quantity-btn">
        <i class="fa-solid fa-minus"></i>
      </a>
      <h4 class="quantity-value">4</h4>
      <a href="#" class="quantity-btn">
        <i class="fa-solid fa-plus"></i>
      </a>
    </div>`;

    cartPieceList.appendChild(cartItem);

}

const initApp = () => {
  fetch("./products.json").then
    (response => response.json()).then
    (data => {
      prodcutList = data;
      showCart();
    })
}
initApp();