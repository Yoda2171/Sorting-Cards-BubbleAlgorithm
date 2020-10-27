var arrCards = [];

const drawCard = (numero, simbolo, color) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("mt-3");
    card.classList.add("ml-3");
    if (numero == 1) {
        newnumber = "A";
        card.innerHTML = `
        <p id="simbolo" class="text-left mr-1 mt-2 ${color}">${simbolo}</p>
        <h1 id="numero" class="text-center">${newnumber}</h1>
        <p id="icono" class="text-right mr-1 mb-2 ${color}">${simbolo}</p>
`;
    } else if (numero == 13) {
        king = "K";
        card.innerHTML = `
        <p id="simbolo" class="text-left mr-1 mt-2 ${color}">${simbolo}</p>
        <h1 id="numero" class="text-center">${king}</h1>
        <p id="icono" class="text-right mr-1 mb-2 ${color}">${simbolo}</p>
`;
    } else if (numero == 12) {
        queen = "Q";
        card.innerHTML = `
        <p id="simbolo" class="text-left mr-1 mt-2 ${color}">${simbolo}</p>
        <h1 id="numero" class="text-center">${queen}</h1>
        <p id="icono" class="text-right mr-1 mb-2 ${color}">${simbolo}</p>
`;
    } else if (numero == 11) {
        jota = "J";
        card.innerHTML = `
        <p id="symbolup" class="text-left mr-1 mt-2 ${color}">${symbol}</p>
        <h1 id="numbers" class="text-center">${jota}</h1>
        <p id="symboldown" class="text-right mr-1 mb-2 ${color}">${symbol}</p>
`;
    } else {
        card.innerHTML = `
        <p id="simbolo" class="text-left mr-1 mt-2 ${color}">${simbolo}</p>
        <h1 id="numero" class="text-center">${numero}</h1>
        <p id="icono" class="text-right mr-1 mb-2 ${color}">${simbolo}</p>
`;
    }
    return card;
}

function InputNumber() {

    let newinput = document.getElementById("input1").value;
    if (newinput == "") {
        alert("Please, enter a number");
    }
    else {
        for (var x = 1; x <= newinput; x++) {
            let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 12, 11, 1];
            let a = Math.floor(Math.random() * numbers.length);
            let symbols = ["♠", "♣", "♥", "♦"];
            let b = Math.floor(Math.random() * symbols.length);
            if (b == 2 || b == 3) {
                classColor = "redColor";
            } else {
                classColor = "blackColor";
            }
            let cards = document.querySelector(".cards");
            cards.appendChild(drawCard(numbers[a], symbols[b], classColor));
            arrCards.push({ "number": numbers[a], "symbol": symbols[b], "classCol": classColor });
        }

    }
}

const OrderNumbers = () => {
    let newArrCards = arrCards.slice();
    bubbleSort(newArrCards);
    console.log(arrCards);
    console.log(newArrCards);
}

const bubbleSort = (arr) => {
    console.log(arr.length);
    let wall = arr.length - 1;
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            if (arr[index].number > arr[index + 1].number) {
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
                for (let j = 0; j < arr.length; j++) {
                    console.log(arr[j]);
                    let cards = document.querySelector(".cards2");
                    cards.appendChild(drawCard(arr[j].number, arr[j].symbol, arr[j].classCol));
                    if (j == arr.length - 1) {
                        let br = document.createElement("br");
                        cards.appendChild(br);
                    }
                }
            }
            index++;
        }
        wall--;
    }

    return arr;
};