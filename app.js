const swiper = new Swiper(".swiper", {});

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
  let arrDataSet = [...document.querySelectorAll("[data-size]")];
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
    infoSize.innerHTML = "Vai al carrello per continuare il tuo acquisto";
  }
};

const checkBtn = () => {
  const allSizeBtn = [...document.querySelectorAll(".size-guide > button")];
  allSizeBtn.forEach((el) => {
    el.addEventListener("click", selectSize);
  });
};

const init = async () => {
  checkBtn();
};

init();
