const tabContentContainer = document.querySelector("main");
const liTab = document.querySelectorAll(".tabs li");
const tabContent = document.querySelectorAll(".tab-content");

tabContentContainer.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    liTab.forEach((tab) => {
      tab.classList.remove("active");
    });
    e.target.classList.add("active");

    tabContent.forEach((cont) => {
      cont.classList.remove("active");
    });

    const activeTab = document.getElementById(id);
    activeTab.classList.add("active");
  }
});

// FAQ
const question = document.querySelectorAll(".question");
const arrow = document.querySelector(".arrow");

question.forEach((ques) => {
  ques.addEventListener("click", () => {
    ques.classList.toggle("active-faq");
    const answerContent = ques.nextElementSibling;
    if (ques.classList.contains("active-faq")) {
      answerContent.style.maxHeight = answerContent.scrollHeight + "px";
      ques.firstElementChild.style.fontWeight = "bold";
      ques.lastElementChild.src = "./images/icon-arrow-light.svg";
      ques.lastElementChild.style.transform = "rotate(180deg)";
    } else {
      answerContent.style.maxHeight = 0;
      ques.firstElementChild.style.fontWeight = "lighter";
      ques.lastElementChild.src = "./images/icon-arrow.svg";
      ques.lastElementChild.style.transform = "rotate(0deg)";
    }
  });
});

// Email verfication
const emailInput = document.querySelector("#email");
const contactBtn = document.querySelector(".contact-btn");
const field = document.querySelector(".field");

contactBtn.addEventListener("click", () => {
  const regEx_Email =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!regEx_Email.test(emailInput.value)) {
    emailInput.style.border = "2px solid hsl(0, 94%, 66%)";
    field.classList.toggle("error");
  } else {
    emailInput.style.border = "2px solid  	hsl(120, 100%, 50%)";
    field.classList.remove("error");
  }
});

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const hamburgerIcon = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  if (navLinks.classList.contains("show")) {
    hamburgerIcon.src = "./images/icon-close.svg";
  } else {
    hamburgerIcon.src = "./images/icon-hamburger.svg";
  }
});
