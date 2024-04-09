// /*=============== SERVICES MODAL ===============*/
// const openModal = document.getElementById("openModalBtn");
// const modal = document.getElementById("myModal");
// const closeModal = document.getElementsByClassName("close")[0];

// openModa.addEventListener("click", function () {
//   modal.style.display = "block";
//   document.body.style.overflow = "hidden"; // hide the scrollbar
// });

// closeModal.addEventListener("click", function () {
//   modal.style.display = "none";
//   document.body.style.overflow = "auto"; // show the scrollbar
// });

// window.addEventListener("click", function (event) {
//   if (event.target === modal) {
//     modal.style.display = "none";
//     document.body.style.overflow = "auto"; // show the scrollbar
//   }
// });

const modal = document.querySelectorAll(".services__modal");

const modalButton = document.querySelectorAll(".services__button");

const modalClose = document.querySelectorAll(".services__modal-close");

let activeModal = (modalClick) => {
  modal[modalClick].classList.add("active-modal");
};

modalButton.forEach((modalButton, i) => {
  modalButton.addEventListener("click", () => {
    activeModal(i);
    document.body.style.overflow = "hidden";
    // document.body.style.backgroundColor = "white";
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modal.forEach((modalRemove) => {
      modalRemove.classList.remove("active-modal");
      document.body.style.overflow = "auto";
    });
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/

const swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,

  spaceBetween: 32,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);
