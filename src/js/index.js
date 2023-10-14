const buttons = document.querySelectorAll('.button');
const characters = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    desselectButton();
    desselectCharacter();

    button.classList.add("selected");
    characters[index].classList.add("selected")
  });
});

function desselectCharacter() {
  const selectedCharacter = document.querySelector(".character.selected");
  selectedCharacter.classList.remove("selected");
}

function desselectButton() {
  const selectedButton = document.querySelector(".selected.button");
  selectedButton.classList.remove("selected");
}