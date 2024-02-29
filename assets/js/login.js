const button = document.querySelector(".button");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const errorDiv = document.querySelector(".error.message");

button.addEventListener("click", function () {
  errorDiv.innerHTML = "";

  const fields = {
    email: {
      emptyMessage: "Please enter your e-mail",
      invalidMessage: "Please enter a valid e-mail",
    },
    password: {
      emptyMessage: "Please enter your password",
      invalidMessage: "Your password must be at least 6 characters",
    },
  };

  const { email: emailField, password: passwordField } = fields;
  let errorMessages = [];

  const validateField = (el, value, field, isEmptyFunc, validationFunc) => {
    if (isEmptyFunc(value)) {
      addClassToGrandparent(el, "error");
      errorMessages.push(field.emptyMessage);
    }

    if (!validationFunc(value)) {
      addClassToGrandparent(el, "error");
      errorMessages.push(field.invalidMessage);
    } else {
      removeClassFromGrandparent(el, "error");
    }
  };

  validateField(email, email.value, emailField, isEmpty, isEmailValid);
  validateField(password, password.value, passwordField, isEmpty, (value) =>
    checkMinLength(value, 6)
  );

  if (errorMessages.length > 0) {
    renderErrors(errorMessages);
  }
});

const isEmpty = (value) => {
  return value.trim().length === 0;
};

const isEmailValid = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

const checkMinLength = (value, minLength) => {
  return value.trim().length >= minLength;
};

const addClassToGrandparent = (el, className) => {
  return el?.parentElement?.parentElement?.classList.add(className);
};

const removeClassFromGrandparent = (el, className) => {
  return el?.parentElement?.parentElement?.classList.remove(className);
};

const renderErrors = (errorsMessage) => {
  const ulElement = document.createElement("ul");
  errorsMessage.forEach(function (itemText) {
    var liElement = document.createElement("li");
    liElement.textContent = itemText;
    ulElement.appendChild(liElement);
  });
  console.log(errorDiv);
  errorDiv.appendChild(ulElement);
  errorDiv;
};
