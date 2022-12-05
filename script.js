var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  li.classList.add("item");
  var createButton = document.createElement("button");
  createButton.classList.add("remove");
  createButton.appendChild(document.createTextNode("⤬"));
  ul.appendChild(li);
  li.appendChild(createButton);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("item")) {
    event.target.classList.toggle("done");
  }
});

function removeItem() {
	ul.querySelectorAll(".remove").forEach((item) => {
		item.addEventListener("click", (event) => {
			event.target.parentNode.remove();
		});
	})
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
