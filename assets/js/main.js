const cells = document.querySelector('.cells')

//Generare i numeri in base alla difficoltà scelta dall'utente
const difficulty = document.getElementById('difficulty').value

console.log(difficulty);

//Verifico in base alla difficoltà scelta dall'utente quanti numeri generare
 if (difficulty === 'Easy'){
    /* generateGridNumbers(1, 100)
    console.log(generateGridNumbers(1, 100)) */
    generateCells(100, 'cell','cell-width-10', 'div')
    allCells('.cell')
    cellsContent('.cell', 1, 100)
} else if (difficulty === 'Medium'){
    /* generateGridNumbers(1, 81)
    console.log(generateGridNumbers(1, 81)) */
    generateCells(81,'cell','cell-width-9', 'div')
    allCells('.cell')
    cellsContent('.cell', 1, 81)


} else if (difficulty === 'Hard'){
    /* generateGridNumbers(1, 49)
    console.log(generateGridNumbers(1, 49)) */
    generateCells(49,'cell','cell-width-7', 'div')
    allCells('.cell')
    cellsContent('.cell', 1, 49)

}
 
//Inserisco i numeri generati nei in modo casuale nelle celle
function cellsContent(select, min, max) {
    const cellsContent = allCells(select)
    for (let i=0; i < cellsContent.length; i++){
        const gridRandomNumber = generateGridNumbers(min, max)
        cellsContent[i].innerHTML = `<span>${gridRandomNumber[i]}</span>`
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

//Funzione per generare dei numeri random in range
function getRandomNumbers(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}
  
//Funzione per generare i numeri casuali della grid
function generateGridNumbers(min, max) {
    const gridNumbers = []
  
    while (gridNumbers.length !== max) {
      const randomNumber = getRandomNumbers(min, max)
  
      if (!gridNumbers.includes(randomNumber)) {
        gridNumbers.push(randomNumber)
      }
    }
    return gridNumbers
  }