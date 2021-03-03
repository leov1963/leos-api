const express = require('express');

const app = express();
const PORT = process.env.PORT || 8000;




const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});

// function getRandomNumber(min, max) {  
//     return Math.floor(
//       Math.random() * (max - min + 1) + min
//     )
// }