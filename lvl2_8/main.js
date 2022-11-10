let buttonElement = document.querySelector("#enter");
let ulElement = document.querySelector("ul");

//Wenn der Knopf gedrückt wird, soll eine neue Liste hinzugefügt werden
buttonElement.addEventListener("click", () => {
    setNewList();
})

//Wenn Enter gedrückt wird, soll eine neue Liste hinzugefügt werden
document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (key === "Enter") {
        setNewList();
        console.log(key);
    }
})


function setNewList() {
    let inputValue = document.querySelector("#userinput").value;
    let newLi = document.createElement("li");

    newLi.textContent = inputValue;
    ulElement.appendChild(newLi);
}