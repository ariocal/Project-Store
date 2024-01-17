const shopContent = document.getElementById("shopContent");
const cart = [];

productos.forEach((product) => {
  const content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
  <h3>${product.productName}</h3>
<img src="${product.img}" />

<p class="price">$ ${product.price},00</p>
`;
  shopContent.append(content);

  const buyButton = document.createElement("button");
  buyButton.innerText = "Añadir al Carrito";
  content.append(buyButton);

  buyButton.addEventListener('click', () =>{
    const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
    if(repeat){
        cart.map((prod)=>{
            if(prod.id === product.id){
                prod.quanty++
                displayCartCounter();
            }
        });
    }else{
        cart.push({
            id: product.id,
            productName: product.productName,
            price: product.price,
            quanty: product.quanty,
            img: product.img
        });
        displayCartCounter();
    }
    
  });
});


//animaciones
$(document).ready(function(){
  $(".carousel-itemm").addClass("animate__animated animated animate__pulse animate__infinite animate__slow");
  $(".animated1").addClass("animate__animated animated animate__backInUp animate__infinite  animate__slower");
  $(".animated2").addClass("animate__animated animated animate__backInDown animate__infinite animate__slower");

  $(".button-report").click(function(){
      alert("Your report was sent...")
  });

});


document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar-collapse");

  // Obtén todos los elementos <a> en la barra de navegación
  const navLinks = document.querySelectorAll(".nav-link");

  // Agrega un controlador de eventos clic a cada enlace de navegación
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Oculta la barra de navegación al hacer clic en un enlace
      navbar.classList.remove("show");
    });
  });
});
