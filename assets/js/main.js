const cells = document.querySelector('.cells')

//Generare i numeri in base alla difficoltà scelta dall'utente
const difficulty = document.getElementById('difficulty').value

console.log(difficulty);

//Verifico in base alla difficoltà scelta dall'utente quanti numeri generare
 if (difficulty === 'Easy'){
    generateCells(100, 'cell','cell-width-10', 'div')
    allCells('.cell')
    cellsContent('.cell', 1, 100)
} else if (difficulty === 'Medium'){
    generateCells(81,'cell','cell-width-9', 'div')
    allCells('.cell')
    cellsContent('.cell', 1, 81)
} else if (difficulty === 'Hard'){
    generateCells(49,'cell','cell-width-7', 'div')
    allCells('.cell')
    cellsContent('.cell', 1, 49)
}

cellsClick('.cell', 'active')
 
//Inserisco i numeri generati nei in modo casuale nelle celle
function cellsContent(select, min, max) {
    const cellsContent = allCells(select)
    for (let i=0; i < cellsContent.length; i++){
        const gridNumber = generateNumbers(min, max)
        cellsContent[i].innerHTML = `<span>${gridNumber[i]}</span>`
    }
}

//Seleziono tutte le celle generate
function allCells(select) {
    const allCells = document.querySelectorAll(select)
    return allCells
}

//Funzione per generare la griglia
function generateCells(cellsWidth, className, className2, element) { //ClassName2 per dare la width corretta in base ai numeri generati
    const cellsElement = document.querySelector('.cells')
    for (let i=0; i < cellsWidth; i++){
        const cellItem = document.createElement(element)
        cellItem.classList.add(className, className2)
        cellsElement.append(cellItem)
    }
}


function generateNumbers(min, max) {
    const gridNumbers = []
    for (let i=1; i <= max; i++ ){
        const randomNumber = i
        gridNumbers.push(randomNumber)
    }
    return gridNumbers
}

function cellsClick(select, className) {
    const cells = allCells(select)
    for (let i=0; i < cells.length; i++){
        const cell = cells[i]
        cell.addEventListener('click', function(){
            cell.classList.toggle(className)
        })
    }
}