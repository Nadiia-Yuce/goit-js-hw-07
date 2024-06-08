"use strict";

const items = document.querySelectorAll(".item");
console.log("Number of categories: " + items.length);

items.forEach((item) => {
  const itemText = item.querySelector("h2").textContent;
  const quantity = item.querySelectorAll("li").length;

  console.log(`Categort: ${itemText}`);
  console.log(`Elements: ${quantity}`);
});
