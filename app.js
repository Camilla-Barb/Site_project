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

const activeBtn = (e) => {
  if (document.querySelector("button.active") !== null) {
    document.querySelector("button.active").classList.remove("active");
  }
  e.target.className = "active";
};

const selectSize = (e) => {
  activeBtn(e);

  // console.log(e.currentTarget);
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

  const allColorBtn = [
    ...document.querySelectorAll(".miniature-image > button"),
  ];
  console.log(allColorBtn);
  allColorBtn.forEach((el) => {
    el.addEventListener("click", activeBtn);
  });
};

//oggetto dinamico che al click del button Add si riempie
// e stampa a video in una label "Stai acquistanndo colore x e taglia y"
// concatenando color e size
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
