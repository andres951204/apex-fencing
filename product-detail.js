import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// SWIPER
new Swiper(".product-detail-swiper", {
  slidesPerView: 1,
  centeredSlides: false,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-product-detail-button-next",
    prevEl: ".swiper-product-detail-button-prev",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const guideContainer = document.getElementById("lighting-options");
  const targetContainer = document.getElementById("lighting-container");

  function setLeftMargin() {
    if (window.innerWidth <= 1024) return;
    const leftMargin = guideContainer.getBoundingClientRect().left;
    targetContainer.style.marginLeft = `${leftMargin}px`;
  }

  window.addEventListener("resize", setLeftMargin);
  setLeftMargin(); // Initial call
});

const productNavbar = document.getElementById("productNavigation");

function stickyNavbar() {
  if (window.scrollY >= productNavbar.offsetTop) {
    productNavbar.classList.add("sticky-navbar");
  } else {
    productNavbar.classList.remove("sticky-navbar");
  }
}

document.addEventListener("scroll", stickyNavbar);
