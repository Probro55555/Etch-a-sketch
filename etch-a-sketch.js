const container = document.querySelector("#container");

const containerwidth = container.clientWidth;

const new_grid = document.querySelector("#newgrid");

const erase = document.querySelector("#erase");

const rgb = document.querySelector("#rgb");


let size = parseInt(prompt("How many rows and columns: "));
function create_grid() {
for(i=0; i< size *size ;i++) {
    const square = document.createElement("div");
    square.classList.add("grid");
    const square_size = containerwidth/size;
    square.style.height = square_size + 'px';
    square.style.width = square_size + 'px';
    square.style.border = "1px solid black";
    container.appendChild(square);
}
const elements = document.querySelectorAll(".grid");
for (const element of elements) {
    element.addEventListener("mouseover",() => {
        element.style.backgroundColor = "black";
        
    });
}

}
new_grid.textContent = "Create new grid";
new_grid.addEventListener("click",() => {
    container.innerHTML = "";

size = parseInt(prompt("How many rows and columns: "));
create_grid();
});

erase.textContent = "Erase";

erase.addEventListener("click",() => {
    const elements = document.querySelectorAll(".grid");
    for(const element of elements) {
        element.addEventListener("mouseover",() => {
            element.style.backgroundColor = "white";
        });
    }     
});

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

rgb.textContent = "RGB";

rgb.addEventListener("click",() => {
    const elements = document.querySelectorAll(".grid");
    for(const element of elements) {
        element.addEventListener("mouseover",() => {

        
        const rndcol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        element.style.backgroundColor = rndcol;
        });
    }
});
 
create_grid();
