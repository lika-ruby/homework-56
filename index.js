const inputElement = document.querySelector("#input");
const btnElement = document.querySelector("#btn");

inputElement.value = "I love JavaScript";
btnElement.textContent = inputElement.value;

//////////////////////////////////////////////

const h3Element = document.querySelector("#title");
const imgElement = document.querySelector("#img");

imgElement.style.width = "300px";

imgElement.src = `https://st4.depositphotos.com/20523700/25949/i/450/depositphotos_259499612-stock-photo-illustration-js-icon.jpg`;

//////////////////////////////////////////////

const linkElement = document.querySelector("#link");
const img2Element = document.querySelector("#img2");

img2Element.style.width = "300px";

linkElement.href = `https://www.google.com/url?sa=i&url=https%3A%2F%2Fakspic.ru%2Fimage%2F167284-reagirovat_js-reagirovat-v_javascript-biblioteka_javascript-sleduyushhij_js&psig=AOvVaw3z41hp-ALL5s2CmBuuPua4&ust=1733730135242000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCNijnpzWl4oDFQAAAAAdAAAAABAh`;
img2Element.alt = `desktop with code`;

//////////////////////////////////////////////

const listElement = document.querySelector("#list");

const firstItemElement = listElement.firstElementChild;

firstItemElement.textContent = "текст 1";
