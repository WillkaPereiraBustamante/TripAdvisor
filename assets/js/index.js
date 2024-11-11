const body = document.querySelector("body");
const openModalBtn = document.getElementById("contact-modal-open")
const closeModalBtn = document.getElementById("contact-modal-close")
const sendContactBtn = document.getElementById("contact-modal-send")
const modal = document.querySelector("#modal")

// const form = document.querySelector('#contact-form');

openModalBtn.addEventListener("click", openModal =>
    modal.classList.remove("display-none")
);

closeModalBtn.addEventListener("click", closeModal =>
    modal.classList.add("display-none")
);

// sendContactBtn.addEventListener("click", sendContact => );