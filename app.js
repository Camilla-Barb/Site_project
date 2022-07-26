document.addEventListener("DOMContentLoaded", function () {
  //Dichiaro costante swiper per poterla riutilizzare eventualmente in futuro

  const swiper = new Swiper(".swiper", {
    // Navigation arrows
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },
  });
});

const selectSize = (e) => {
  // let arrDataSet = [...document.querySelectorAll("[data-size]")];
  let infoSize = document.querySelector(".size-info");
  infoSize.style.display = "block";
  if (e.currentTarget.dataset.size === "xs") {
    //taglia non disponibile
    infoSize.innerHTML = "Taglia non disponibile";
  } else if (e.currentTarget.dataset.size === "s") {
    // ultimo capo disponibile
    infoSize.innerHTML = "Ultimo capo disponibile";
  } else {
    //Vai al carrello
    infoSize.innerHTML = "Aggiungi al carrello per continuare il tuo acquisto";
  }
};

const checkBtn = () => {
  const allSizeBtn = [...document.querySelectorAll(".size-guide > button")];
  allSizeBtn.forEach((el) => {
    el.addEventListener("click", selectSize);
  });
};

let productInfo = {
  color: "",
  size: "",
};

// el.classList.toggle("focus");
//  if (el.clicked == true) {
//   el.classList.remove("focus");
// } else {
//   el.classList.toggle("focus");
// }

const addToCart = () => {
  const btnAddToCart = document.querySelector(".add-to-cart");
  let infoSize = document.querySelector(".size-info");
  const chooseColor = [...document.querySelectorAll(".select-color")];
  if (
    (infoSize.innerHTML !== "Taglia non disponibile") &
    chooseColor.classList.contains("focus")
  ) {
    //al click del btn => alert("Prodotto aggiunto al carrello")
    btnAddToCart.addEventListener("click", function () {
      alert("Prodotto aggiunto al carrello");
    });
  } else {
    alert("error");
  }
};

const init = async () => {
  checkBtn();
};

init();
