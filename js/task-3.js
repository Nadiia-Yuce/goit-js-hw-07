"use strict";
const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", handler);

function handler(event) {
  const someName = event.currentTarget.value.trim();
  if (someName === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = someName;
  }
}
