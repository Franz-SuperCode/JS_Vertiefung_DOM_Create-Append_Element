let buttonElement = document.querySelector("button");
let divElement = document.querySelector(".umwickeln");

let i = 0;
buttonElement.addEventListener("click", () => {
    let newP = document.createElement("p");
    newP.classList.add("rechteck");
    newP.textContent = i;
    divElement.appendChild(newP);

    //Falls i / 10 keinen Rest ergibt, dann soll die Klasse hinzugefügt werden
    if (i % 10 === 0) {
        newP.classList.add("weiss");
    }

    i++;
})
