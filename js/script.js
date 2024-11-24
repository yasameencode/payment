document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("ad-slider");
  const slides = document.querySelectorAll("#ad-slider .slide");
  let currentIndex = 0;
  let autoScroll;
  let direction = 1;

  function showNextSlide() {
    if (currentIndex === slides.length - 1 && direction === 1) {
      direction = -1;
    } else if (currentIndex === 0 && direction === -1) {
      direction = 1;
    }
    currentIndex += direction;
    const offset = currentIndex * slider.clientWidth;
    slider.scrollTo({
      left: offset,
      behavior: "smooth",
    });
  }

  function startAutoScroll() {
    autoScroll = setInterval(showNextSlide, 5000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  slider.addEventListener("scroll", function () {
    const scrollLeft = slider.scrollLeft;
    const slideWidth = slider.clientWidth;
    currentIndex = Math.round(scrollLeft / slideWidth);
  });

  slider.addEventListener("touchstart", stopAutoScroll);
  slider.addEventListener("touchend", startAutoScroll);

  startAutoScroll();
});




document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("image-slider");
  const slides = document.querySelectorAll("#image-slider .slider");
  let currentIndex = 0;
  let autoScroll;
  let direction = 1;

  function showNextSlide() {
    if (currentIndex === slides.length - 1 && direction === 1) {
      direction = -1;
    } else if (currentIndex === 0 && direction === -1) {
      direction = 1;
    }
    currentIndex += direction;
    const offset = currentIndex * slider.clientWidth;
    slider.scrollTo({
      left: offset,
      behavior: "smooth",
    });
  }

  function startAutoScroll() {
    autoScroll = setInterval(showNextSlide, 5000);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  slider.addEventListener("scroll", function () {
    const scrollLeft = slider.scrollLeft;
    const slideWidth = slider.clientWidth;
    currentIndex = Math.round(scrollLeft / slideWidth);
  });

  slider.addEventListener("touchstart", stopAutoScroll);
  slider.addEventListener("touchend", startAutoScroll);

  startAutoScroll();
});




document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const indicator = document.querySelector(".nav-indicator");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      // إزالة التحديد السابق
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      // تحريك المؤشر
      moveIndicator(item);
    });
  });

  function moveIndicator(element) {
    const leftPosition = element.offsetLeft;
    const width = element.offsetWidth;
    indicator.style.left = `${leftPosition + width / 2 - indicator.offsetWidth / 2}px`;
  }

  // وضع الـ Indicator عند العنصر الأول عند التحميل
  moveIndicator(document.querySelector(".nav-item.active"));
});

