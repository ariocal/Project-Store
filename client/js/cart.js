const modalContainer = document.getElementById("modal-container");
const modaOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("card-counter");

const displayCrad = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "block";
  modaOverlay.style.display = "block";

  // Modal header
  const modelHeader = document.createElement("div");
  modelHeader.className = "modal-hearder";
  const modalClose = document.createElement("div");
  modalClose.innerHTML = `<i class="bi bi-x-circle-fill"></i>`;
  modalClose.className = "modal-close";

  modelHeader.append(modalClose);
  modalClose.addEventListener("click", () => {
    modalContainer.style.display = "none";
    modaOverlay.style.display = "none";
  });

  const modalTitle = document.createElement("div");
  modalTitle.innerText = "Carrito de Compras";
  modalTitle.className = "modal-title";
  modelHeader.append(modalTitle);

  modalContainer.append(modelHeader);

  // Modal body
  if (cart.length > 0) {
    cart.forEach((product) => {
      const modalBody = document.createElement("div");
      modalBody.className = "modal-body";
      modalBody.innerHTML = `
        <div class="product">
          <img class="product-img" src="${product.img}"/>
          <div class="product-info">
            <h4>${product.productName}</h4>
          </div>

          <div class="quantity">
            <span class="quantity-btn-decrese"><i class="bi bi-dash-circle"></i></span>
            <span class="quantity-input">${product.quanty}</span>
            <span class="quantity-btn-increse"><i class="bi bi-plus-circle"></i></span>
          </div>

          <div class="price">$${product.price * product.quanty},00</div>
          <div class="delete-product"><i class="bi bi-x-square"></i></div>
        </div>
      `;

      modalContainer.append(modalBody);

      // Disminuir cantidad de elementos del carrito
      const decrese = modalBody.querySelector(".quantity-btn-decrese");
      decrese.addEventListener("click", () => {
        if (product.quanty !== 1) {
          product.quanty--;
          displayCrad();
        }
        displayCartCounter();
      });

      // Aumentar cantidad de elementos del carrito
      const increse = modalBody.querySelector(".quantity-btn-increse");
      increse.addEventListener("click", () => {
        product.quanty++;
        displayCrad();
        displayCartCounter();
      });

      // DELETE PRODUCTOS
      const deletePorduct = modalBody.querySelector(".delete-product");
      deletePorduct.addEventListener("click", () => {
        deleteCartProduct(product.id);
      });
    });

    // Modal footer
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);
    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalFooter.innerHTML = `
      <div class="total-price">Total a pagar: $${total},00</div>
      <button class="btn-primary" id="checkout-btn">Realizar Pago</button>
      <div id="button-checkout"></div>
    `;
    modalContainer.append(modalFooter);

    const checkoutButton = modalFooter.querySelector("#checkout-btn");
    checkoutButton.addEventListener("click", function () {
      alert("Pago Realizado");
    });
    
  } else {
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerHTML = "El carrito está vacío...";
    modalContainer.append(modalText);
  }
};

cartBtn.addEventListener("click", displayCrad);

// Función eliminar productos del modal
const deleteCartProduct = (id) => {
  const foundId = cart.findIndex((element) => element.id === id);
  cart.splice(foundId, 1);
  displayCrad();
  displayCartCounter();
};

const displayCartCounter = () => {
  const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
  if (cartLength > 0) {
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
  } else {
    cartCounter.style.display = "none";
  }
};
