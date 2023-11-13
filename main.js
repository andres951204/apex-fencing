import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// SWIPER
new Swiper(".reviews-swiper", {
  slidesPerView: 1,
  centeredSlides: false,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2.3,
      slidesPerGroup: 2,
    },
  },
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});

// SWIPER
new Swiper(".product-detail-swiper", {
  slidesPerView: 1,
  centeredSlides: false,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2.3,
      slidesPerGroup: 2,
    },
  },
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".swiper-product-detail-button-next",
    prevEl: ".swiper-product-detail-button-prev",
  },
});

// HEADER SEARCH BAR
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");
const crossIcon = document.getElementById("crossIcon");

searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("hidden");
  searchIcon.classList.add("hidden");
  crossIcon.classList.remove("hidden");
  if (!searchInput.classList.contains("hidden")) {
    searchInput.focus();
  }
});

crossIcon.addEventListener("click", () => {
  searchInput.classList.toggle("hidden");
  searchIcon.classList.remove("hidden");
  crossIcon.classList.add("hidden");
  if (!searchInput.classList.contains("hidden")) {
    searchInput.focus();
  }
});

// SIDEBAR
const toggleSidebarButton = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const crossIconsidebar = document.getElementById("crossIcon-sidebar");

const toggleSideBar = () => {
  sidebar.classList.toggle("translate-x-full");
  sidebarOverlay.classList.toggle("invisible");
  sidebarOverlay.classList.toggle("opacity-0");
  document.body.classList.toggle("overflow-hidden");
};

toggleSidebarButton.addEventListener("click", toggleSideBar);

crossIconsidebar.addEventListener("click", toggleSideBar);

// BACK TO TOP BUTTON
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// GET CURRENT YEAR
const currentYearElement = document.getElementById("currentYear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("review-header-section");
  const productNav = document.getElementById("review-slider");

  function setLeftMargin() {
    const leftMargin = navbarContainer.getBoundingClientRect().left;
    console.log(leftMargin);
    productNav.style.marginLeft = `${leftMargin}px`;
  }

  window.addEventListener("resize", setLeftMargin);
  setLeftMargin(); // Initial call
});
