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

// description: "Returns a random subtraction equation"
// optional query parameters:
//   - (min) The minimum allowable random value for either of the operands. Ex: ?min=2
//   - (max)  The maximum allowable random value for either of the operands. Ex: ?max=15
//   - (negative)  If present, allows the lefthand operand to be larger than the right hand operand (meaning the resulting answer is a negative number). Ex: ?megative=true
app.get('/subtract', (req, res) => {
    const min = parseInt(req.query.min) || 1
    const max = parseInt(req.query.max) || 100
    const allowNegative = req.query.negative || false
    
    const num1 = getRandomNumber(min, max)
    const num2 = getRandomNumber(min, max)
    if (allowNegative) {
        const equation = num1 + "-" + num2
        res.send(equation);
    }
    else {
        let equation 
        if (num1 > num2) {
            equation = num1 + "-" + num2
        } else {
            equation = num2 + "-" + num1
        }
        res.send(equation);
    }
    console.log(`min ${min}, max: ${max}`)
    console.log(`num1 ${num1}, num2: ${num2}`)
});



const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

function getRandomNumber(min, max) {  
    return Math.floor(
      Math.random() * (max - min + 1) + min
    )
}