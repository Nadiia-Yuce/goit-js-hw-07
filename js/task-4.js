"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerGetInfo);

function handlerGetInfo(event) {
  event.preventDefault();

  const getEmail = form.elements.email.value.trim();
  const getPassword = form.elements.password.value.trim();

  if (!getEmail || !getPassword) {
    alert("All form fields must be filled in");
    return;
  }

  const data = {
    email: getEmail,
    password: getPassword,
  };

  //   const { email, password } = event.currentTarget.elements;

  //   const data = {
  // email: email.value.trim(),
  // password: password.value.trim(),
  //   };

  console.log(data);

  form.reset();
}
