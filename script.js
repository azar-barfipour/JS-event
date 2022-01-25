const list = document.getElementById("list");
// list.textContent = "Hello";

console.log(list.textContent); // just text
console.log(list.innerHTML); // text with the tags

const el = document.querySelector("ul li:nth-child(2)");
console.dir(el);

const iconsArr = Array.from(list); // convert to array
console.log(iconsArr);

const h2 = document.querySelector("header h2");

h2.style.color = "blue";
h2.style.backgroundColor = "red";

const list3 = document.querySelectorAll("ul li");

for (let i = 0; i < list3.length; i++) {
  list3[i].style.backgroundColor = "magenta";
}

list3[0].style.cssText = "background-color : yellow";

h2.className = "changeBackground"; // add this className in the css
h2.className += " chanheFont"; // adding another class- the space is crucial

h2.classList.add("changeBackground"); // add class
h2.classList.remove("changeBackground"); // remove class

const div = document.querySelector("div.wrapper");
console.log(div.getAttribute("class")); // get attributes

div.setAttribute("style", "background-color: coral"); // add attributes
div.removeAttribute("style"); // removing attr
console.log(div.hasAttribute("style")); // check if there is attr

const btn = document.getElementById("add-btn");
const input = document.getElementById("add-input");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log(e.target);
  console.log(input.value);
});
