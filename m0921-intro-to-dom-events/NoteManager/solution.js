const btn = document.getElementById("add-btn");
const input = document.getElementById("add-input");
const list = document.querySelector("#list");

// first approach

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   //   console.log(event);
//   console.log(input.value);
//   const newLi = document.createElement("li");
//   newLi.innerHTML += `<p>${input.value}</p>
//   <p><i class="fa fa-pencil"></i><i class="fa fa-times"></i></p>`;
//   input.value = "";
//   list.appendChild(newLi);
// });

// second approach

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const newLi = document.createElement("li");
  const firstP = document.createElement("p");
  const secondP = document.createElement("p");
  const firstI = document.createElement("i");
  const secondI = document.createElement("i");

  newLi.appendChild(firstP);
  newLi.appendChild(secondP);
  secondP.appendChild(firstI);
  secondP.appendChild(secondI);
  firstP.textContent = input.value;
  firstI.className = "fa fa-pencil";
  secondI.className = "fa fa-times";
  list.appendChild(newLi);
  input.value = "";
});
