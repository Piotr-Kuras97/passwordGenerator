const chars = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890!@#$%^&*"
const btn = document.querySelector("button")
const clear = document.querySelector(".clear")
clear.style.display = "none"
const section = document.querySelector("section")
const passwordNumber = 5
let allDiv
let passwordLenght

btn.addEventListener("click", (e) => {
    passwordLenght = document.querySelector("input").value
    for (let i = 0; i < passwordNumber; i++){
        let code = ""
        for (let i = 0; i < passwordLenght; i++){
            const index = Math.floor(Math.random() * chars.length)
            code += chars[index]
            if (passwordLenght < 8 || passwordLenght > 25){
                code = ""
                span.innerHTML = ""
            }
        }
        const div = document.createElement("div")
        div.innerHTML = code
        section.appendChild(div)
        if (passwordLenght < 10){
            const span = document.createElement("span")
            div.appendChild(span)
            span.textContent = " - słabe hasło"
        }
        if (passwordLenght < 15 && passwordLenght >= 10){
            const span = document.createElement("span")
            div.appendChild(span)
            span.innerHTML = " - średnie hasło"
        }
        if (passwordLenght >= 15){
            const span = document.createElement("span")
            div.appendChild(span)
            span.innerHTML = " - mocne hasło"
        }
    }
    clear.style.display = "block"
    allDiv = document.querySelectorAll("div")
})



clear.addEventListener("click", () => {
    allDiv.forEach((item) => {
       item.style.display = "none"
    })
    clear.style.display = "none"
})