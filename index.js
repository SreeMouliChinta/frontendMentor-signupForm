const buttonEL = document.querySelector(".submit");
const inputEL = document.querySelectorAll(".input");
const inputlabelEL = document.querySelectorAll(".input-label");
const errorEL = document.querySelectorAll(".error");

for (let i = 0; i < inputEL.length; i++) {
  inputlabelEL[i].style.display = "none";
  errorEL[i].style.display = "none";
}

buttonEL.addEventListener("click", function () {
  for (let i = 0; i < inputEL.length; i++) {
    if (inputEL[i].value === "") {
      inputEL[i].placeholder = "";
      inputEL[i].classList.add("error-input");
      inputlabelEL[i].style.display = "block";
      errorEL[i].style.display = "block";
    } else {
      inputEL[i].classList.remove("error-input");
      inputlabelEL[i].style.display = "none";
      errorEL[i].style.display = "none";
    }

    if (inputEL[2].value === "") {
      inputEL[2].placeholder = "email@example/com";
      inputEL[2].classList.add("color-change");
    }
  }
});

inputEL.forEach(function (input, index) {
  input.addEventListener("focus", function () {
    errorEL[index].style.display = "none";
  });
});