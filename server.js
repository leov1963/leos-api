const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;


// description: "Returns a random addition equation"
// optional query parameters:
//   - (min) The minimum allowable random value for either of the operands. Ex: ?min=2
//   - (max)  The maximum allowable random value for either of the operands. Ex: ?max=15

app.get('/', (req, res) => {
    const min = parseInt(req.query.min) || 1
    const max = parseInt(req.query.max) || 100
    const num1 = getRandomNumber(min, max)
    const num2 = getRandomNumber(min, max)
    const equation = num1 + "+" + num2
    console.log(`min ${min}, max: ${max}`)
    console.log(`num1 ${num1}, num2: ${num2}`)
    res.send(equation);
});



const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

function getRandomNumber(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
}