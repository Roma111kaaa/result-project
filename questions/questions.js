const green = document.querySelector("#green")
const red = document.querySelector("#red")
const pink = document.querySelector("#pink")
const orange = document.querySelector("#orange")

const btn = document.querySelector("#responce")

const body = document.querySelector("body")

green.addEventListener("click", (event) => body.style.background = "orange")
red.addEventListener("click", (event) => body.style.background = "pink")
pink.addEventListener("click", (event) => body.style.background = "green")
orange.addEventListener("click", (event) => body.style.background = "red")


let counter = 1;

btn.addEventListener("click", function() {
  if (counter > 10) {
    document.getElementById("what_is").textContent = "УРАААА"
    alert("Поздравляем, вы не клоун!")
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  } else {
    alert(`Вы клоун № ${counter}`);
  counter++
  }
});
