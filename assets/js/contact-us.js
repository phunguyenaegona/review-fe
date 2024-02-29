const menuCheckbox = document.getElementById("menu_checkbox");
const menuMobile = document.querySelector(".header__menu-mobile");
const closeMenuIcon = document.querySelector(
  ".header__menu-mobile .close-icon"
);
const dropdownContent = document.querySelector(
  ".header__menu-mobile .dropdown-content"
);
const dropdownPlusIcon = document.querySelector(
  ".header__menu-mobile .plus-icon"
);
const dropdownMinusIcon = document.querySelector(
  ".header__menu-mobile .minus-icon"
);
const textareaMessage = document.getElementById("contact-message");
const header = document.querySelector(".header-main");
const headerSub = document.querySelector(".header-sub");
const businessPhoneInput = document.getElementById("business-phone");

menuCheckbox?.addEventListener("change", function (e) {
  if (e.target.checked) {
    menuMobile.style.transform = "translateX(0)";
  } else {
    menuMobile.style.transform = "translateX(-100%)";
  }
});

dropdownPlusIcon?.addEventListener("click", function () {
  dropdownContent.style.display = "block";
  dropdownMinusIcon.style.display = "block";
  dropdownPlusIcon.style.display = "none";
});

dropdownMinusIcon?.addEventListener("click", function () {
  dropdownContent.style.display = "none";
  dropdownMinusIcon.style.display = "none";
  dropdownPlusIcon.style.display = "block";
});

closeMenuIcon?.addEventListener("click", function () {
  menuMobile.style.transform = "translateX(-100%)";
  menuCheckbox.checked = false;
});

textareaMessage.addEventListener("focus", () => {
  textareaMessage.classList.add("focus");
});

textareaMessage.addEventListener("blur", () => {
  textareaMessage.classList.remove("focus");
});

const addFixedClass = () => {
  const sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("fixed");
    headerSub.classList.add("visible");
  } else {
    header.classList.remove("fixed");
    headerSub.classList.remove("visible");
  }
};

window.onscroll = function () {
  addFixedClass();
};

businessPhoneInput?.addEventListener("input", (e) => {
  if (!isNaN(e.target.value)) {
    businessPhoneInput.value = e.target.value;
  } else {
    businessPhoneInput.value = "";
  }
});
