let selectElement = document.querySelector("#farbeAuswahlen");
let buttonElement = document.querySelector("#button");

buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    //Speichere den Index der ausgewählten Option
    let selectedOptionIndex = selectElement.selectedIndex;
    console.log(selectedOptionIndex);
    // Lösche die Option mit dem ausgewählten Index
    selectElement[selectedOptionIndex].remove();



})