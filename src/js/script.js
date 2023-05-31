// Mobile Nav
function mobilenav() {
  document.getElementById("mobilenav").classList.toggle("active");

  if (document.getElementById("more").classList.contains("active")) {
    document.getElementById("more").classList.remove("active");
  }

  window.onresize = function () {
    if (window.innerWidth > 768) {
      document.getElementById("mobilenav").classList.remove("active");
    }
  };
}

// Mobile Nav More
function more() {
  document.getElementById("more").classList.toggle("active");
}

function backmore() {
  document.getElementById("more").classList.remove("active");
}

// Dropdown
function dropdown() {
  document.getElementById("dropdown").classList.toggle("active");

  window.onresize = function () {
    if (window.innerWidth > 768) {
      document.getElementById("dropdown").classList.remove("active");
    }
  };
}

// Close Dropdown
window.onclick = function (event) {
  if (
    !event.target.matches("#dropdown") &&
    !event.target.matches("#dropdown *")
  ) {
    document.getElementById("dropdown").classList.remove("active");
  }
};

// Swiper Slider
var mainSlider = new Swiper(".mainSlider", {
  noSwiping: true,
  noSwipingClass: "pointer-events-none",
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Statistics ve Recenctly Tabs Active
const statistics = document.querySelectorAll(".statistics ul li");
const recenctlyList = document.querySelectorAll(".recenctly .recenctly-list div");
const recenctlyTrade = document.querySelectorAll(".recenctly .recenctly-traded div");
const heroesElement = document.querySelector(".heroes");
const cosmeticsElement = document.querySelector(".cosmetics");
const tradedHeroes = document.querySelector(".traded-heroes");
const tradedCosmetics = document.querySelector(".traded-cosmetics");

statistics.forEach((element) => {
  element.addEventListener("click", function () {
    setActiveElement(statistics, this);
    updateCountUpValues(this);
  });
});

recenctlyList.forEach((element) => {
  element.addEventListener("click", function () {
    setActiveElement(recenctlyList, this);
    heroesElement.style.display = this.id === "heroes" && this.classList.contains("active") ? "flex" : "none";
    cosmeticsElement.style.display = this.id === "cosmetics" && this.classList.contains("active") ? "flex" : "none";
  });
});

recenctlyTrade.forEach((element) => {
  element.addEventListener("click", function () {
    setActiveElement(recenctlyTrade, this);
    tradedHeroes.style.display = this.id === "traded-heroes" && this.classList.contains("active") ? "flex" : "none";
    tradedCosmetics.style.display = this.id === "traded-cosmetics" && this.classList.contains("active") ? "flex" : "none";
  });
});

function setActiveElement(elements, activeElement) {
  elements.forEach((element) => {
    element.classList.remove("active");
  });
  activeElement.classList.add("active");
}

// CountUp
function updateCountUpValues(activeElement) {
  var values = activeElement.getAttribute("data-values").split(",");
  var totalListedValue = parseInt(values[0]);
  var transactionVolumeValue = parseInt(values[1]);
  var itemsTradedValue = parseInt(values[2]);

  var totalListed = new countUp.CountUp("total-listed", totalListedValue);
  var transactionVolume = new countUp.CountUp("transaction-volume", transactionVolumeValue);
  var itemsTraded = new countUp.CountUp("items-traded", itemsTradedValue);

  totalListed.start();
  transactionVolume.start();
  itemsTraded.start();
}

// Window Update CountUp Values
window.addEventListener("load", function () {
  updateCountUpValues(statistics[0]);
});