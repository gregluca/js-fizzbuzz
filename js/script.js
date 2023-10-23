const headingElem = document.createElement("h1");
headingElem.classList.add("heading");
console.log(headingElem);

const containerElem = document.querySelector(".container");
containerElem.prepend(headingElem);

const rowElem = document.querySelector(".row");
let gridString = "";

for (let i = 1; i <= 100; i++) {
    let result = "";
    let className = "";
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz";
        className = "green";
    } else if (i % 3 === 0) {
        result = "Fizz";
        className = "pink";
    } else if (i % 5 === 0) {
        result = "Buzz";
        className = "blue";
    } else {
        result = i;
    }

    const boxElem = document.createElement("div");
    boxElem.classList.add("box");
    if(className !== "") {
        boxElem.classList.add(className);
    }
    boxElem.innerHTML = result;
    boxElem.addEventListener("click", function() {
       alert(result)
    })
    rowElem.append(boxElem);
   
}