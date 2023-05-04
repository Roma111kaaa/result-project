let audio = new Audio("audio/bird_song.mp3")
audio.play()

let btn = document.getElementById('start_button')
btn.addEventListener("mouseover", isClown)
btn.addEventListener("mouseout", (event) => event.target.textContent = "Начать тест")

function isClown() {
  if (!document.querySelector("#i_am_not_a_clown input").checked) {
    btn.textContent = "Я клоун"
  }
}

btn.addEventListener("click", result)

function result() {
  if (document.querySelector("#i_am_not_a_clown input").checked) {
    window.location.href = "questions/first.html"
  } else {
    let name = ""
    name = prompt("ПОЗДРАВЛЯЕМ! ВЫ КЛОУН!\nВведите ваше клоунское имя:")
    if (!name) name = "Тут должно быть ваше имя"

    const item = document.createElement("li")
    item.appendChild(document.createTextNode(name.substring(0, 24)))
    document.querySelector("#list").appendChild(item)
  }
}
