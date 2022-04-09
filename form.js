let hide = document.querySelector(".hide");
let img = document.querySelector(".hidden_section")
hide.addEventListener("click",() => {
    img.classList.toggle("d-none")
})