// PRODUCT.JSON FILE
// sent a request to open an URL =>  an HTTP request
// through GET (http method) it opens the file
// the type of response it's a JSON and it sends it
// Through the event ONLOAD (during the load) of the request it does a function
// the function takes a constant product in which we have the response of the request
// I print it in the console

// OLD METHOD

// let requestURL = "./product.json";
// let request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();

// request.onload = function () {
//   const product = request.response;
//   console.log(product);
// };

// NEW METHOD (FETCH)
// async function named loadProduct
// constant response identify the response to send => fetch accept 2 arguments:
// first argument = the url of the request or a request object
// second argument = options.method (get) or option.body (the body of the http request) or option.headers (an object with the headers to attach to the request)
// Calling fetch() starts a request and returns a promise => when the request completes, the promise resolves to the response object
// with RESPONSE.JSON I can parse the json in a JS OBJECT (return a promise)

async function loadProduct() {
  const response = await fetch("./db.json", { method: "GET" });
  const product = await response.json();

  console.log(product);
}

// ESEMPIO JSON GET DATI PROFILO GITHUB
// function success() {
//   var data = JSON.parse(this.responseText); //fai il parsing della stringa a JSON
//   console.log(data);
// }
// // funzione per gestire errori
// function error(err) {
//   console.log("Request Failed", err); //dettagli dell'errore saranno nell'oggetto "err"
// }

// var xhr = new XMLHttpRequest(); //invoca una nuova instanza di XMLHttpRequest
// xhr.onload = success; // invoca la funzione success se la richiesta ha successo
// xhr.onerror = error; // chiama la funzione error se la richiesta fallisce
// xhr.open("GET", "https://api.github.com/users/Camilla-Barb"); // apri una richiesta GET
// xhr.send();

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
  event.target.className = "active";
  // productInfo.valueColor = event.target.dataset.color;
  productInfo.valueSize = event.target.dataset.size;
};

const selectColor = (event, buttonColorList) => {
  buttonColorList.forEach((el) => {
    el.classList.remove("active");
  });
  event.target.className = "active";
  productInfo.valueColor = event.target.dataset.color;
};

const addToCart = () => {
  const addToCartBtn = document.querySelector(".cart");
  const labelText = document.querySelector("label");
  addToCartBtn.addEventListener("click", () => {
    if (productInfo.valueColor === "" && productInfo.valueSize === "") {
      labelText.style.display = "block";
      labelText.innerHTML = "Seleziona il colore e la taglia";
    } else if (productInfo.valueSize === "") {
      labelText.style.display = "block";
      labelText.innerHTML = "Seleziona la taglia";
    } else if (productInfo.valueColor === "") {
      labelText.style.display = "block";
      labelText.innerHTML = "Seleziona il colore";
      console.log("done");
    } else {
      labelText.style.display = "block";
      labelText.innerHTML = productInfo.fullProduct();
    }
  });
};

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
    el.addEventListener("click", (e) => selectColor(e, allColorBtn));
  });
};

const init = async () => {
  loadProduct();
  addToCart();
  selectBtn();
};

init();
