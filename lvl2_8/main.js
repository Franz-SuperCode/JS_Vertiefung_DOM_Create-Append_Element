let buttonElement = document.querySelector("#enter");
let ulElement = document.querySelector("ul");

buttonElement.addEventListener("click", () => {
    let inputValue = document.querySelector("#userinput").value;
    console.log(inputValue);

    let newLi = document.createElement("li");
    newLi.textContent = inputValue;
    ulElement.appendChild(newLi);
})
