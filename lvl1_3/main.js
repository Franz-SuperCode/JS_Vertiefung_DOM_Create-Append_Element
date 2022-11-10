let buttonFirst = document.querySelectorAll("button")[0];
let buttonLast = document.querySelectorAll("button")[1];
let buttonNext = document.querySelectorAll("button")[2];
let buttonPrevious = document.querySelectorAll("button")[3];

buttonFirst.addEventListener("click", () => {
    let ulElement = document.querySelector("#myList");
    let firstElement = ulElement.firstElementChild.innerHTML;
    write(firstElement)
})
buttonLast.addEventListener("click", () => {
    let ulElement = document.querySelector("#myList");
    let lastElement = ulElement.lastElementChild.innerHTML;
    write(lastElement)
})
buttonNext.addEventListener("click", () => {
    let ulElement = document.querySelector("#myList");
    let next = ulElement.firstElementChild.nextElementSibling.innerHTML;
    write(next)
})
buttonPrevious.addEventListener("click", () => {
    let ulElement = document.querySelector("#myList");
    let previous = ulElement.lastElementChild.previousElementSibling.innerHTML;
    write(previous)
})

function write(result) {
    document.querySelector("output").innerHTML = result;
}