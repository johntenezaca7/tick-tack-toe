const prompt = require('prompt')

const board = (change) =>{
    console.log("~~~~~~~~~~~~~~~~~~~~")
    console.log('Tick_Tak_Toe')
    console.log('|')
    console.log('Rules: Give any number from 1-9');
    console.log('|')
    console.log("O|O|O\nO|O|O\nO|O|O")
}

board()
prompt.start();



const userInput = (input) => {
    console.log(`you pressed ${input}`)
    board()
}
prompt.get(['input'], function(err, result){
    console.log('Comman line input received');
    userInput(result.input)
})