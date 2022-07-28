// PRODUCT.JSON FILE
// sent a request to open an URL =>  an HTTP request
// through GET (http method) it opens the file
// the type of response it's a JSON and it sends it
// Through the event ONLOAD (during the load) of the request it does a function
// the function takes a constant product in which we have the response of the request
// I print it in the console

let requestURL = "./product.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const product = request.response;
  console.log(product);
};

// OGGETTO GLOBALE
let productInfo = {
  valueColor: "",
  valueSize: "",
  fullProduct: function () {
    return "Stai acquistando:" + this.valueColor + " " + this.valueSize;
  },
};

// CAROUSEL
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

// BUTTON SIZE
const selectSize = (event, buttonList) => {
  buttonList.forEach((el) => {
    el.classList.remove("active");
  });
  // activeBtn(e);
  // if (document.querySelector("button.active") !== null) {
  //   document.querySelector("button.active").classList.remove("active");
  event.target.className = "active";
  productInfo.valueColor = event.target.dataset.color;
  productInfo.valueSize = event.target.dataset.size;
  // console.info(productInfo.valueSize);

  // console.log(e.currentTarget);
  // let arrDataSet = [...document.querySelectorAll("[data-size]")];
};

const addToCart = () => {
  const addToCartBtn = document.querySelector(".cart");
  const labelText = document.querySelector("label");
  addToCartBtn.addEventListener("click", () => {
    // productInfo.valueColor && productInfo.valueSize !== null
    if (productInfo.value !== null) {
      labelText.style.display = "block";
      labelText.innerHTML = productInfo.fullProduct();
    }
  });
};

// const selectColor = (event, btnColorList) => {
//   btnColorList.forEach((el) => {
//     el.classList.remove("active");
//   });
//   event.target.className = "active";
//   valueColor = event.target.dataset.color;
// };

const tempFunction = () => {
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

// BUTTON COLOR E SIZE
// const activeBtn = (e) => {
//   const addToCartBtn = document.querySelector(".add-to-cart > button.cart");
//   const allActiveBtn = document.querySelectorAll("button.active");
//   allActiveBtn.forEach((el) => {
//     if (allActiveBtn !== null) {
//       el.classList.remove("active");
//     }
//     e.target.className = "active";
//   });
//   addToCartBtn.addEventListener("click", function addLabel(e) {
//     // if (
//     //    document.querySelectorAll(".miniature-image > button").classList.contains("active") &&
//     //    document.querySelectorAll("")
//     //  )
//     let productInfo = {
//       color: "yellow",
//       size: "s",
//       fullProduct: function () {
//         return "Stai acquistando:" + this.color + " " + this.size;
//       },
//     };
//     // productInfo.color = document.querySelector(".miniature-image button.active[data-color]");
//     // productInfo.color = e.currentTarget.classList.contains("active");
//     // console.log(productInfo.color);
//     let labelText = document.querySelector("label");
//     labelText.style.display = "block";
//     labelText.innerHTML = productInfo.fullProduct();
//   });
// };

// FUNCTION BUTTON CLICK
const selectBtn = () => {
  const allSizeBtn = document.querySelectorAll(".size-guide > button");

  allSizeBtn.forEach((el) => {
    el.addEventListener("click", (e) => selectSize(e, allSizeBtn));
  });

  const allColorBtn = document.querySelectorAll(".select-color > button");
  allColorBtn.forEach((el) => {
    el.addEventListener("click", (e) => selectSize(e, allColorBtn));
  });
};

const init = async () => {
  selectBtn();
  addToCart();
};

init();
