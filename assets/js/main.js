const cells = document.querySelector('.cells')

//Generare i numeri in base alla difficoltà scelta dall'utente
const difficulty = document.getElementById('difficulty').value

console.log(difficulty);


if (difficulty === 'Easy'){
    generateGridNumbers(1, 100)
    console.log(generateGridNumbers(1, 100))
} else if (difficulty === 'Medium'){
    generateGridNumbers(1, 81)
    console.log(generateGridNumbers(1, 81))
} else if (difficulty === 'Hard'){
    generateGridNumbers(1, 49)
    console.log(generateGridNumbers(1, 49))
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