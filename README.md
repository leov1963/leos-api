# Random Math API

## An api that returns random math equations with different logic at various endpoints.

---

try out this endpoint!
http://localhost:8000/subtract?min=80&max=500&negative=true
### '/' Route
#### Returns a random addition equation

- (min) Update the minimum allowable random value for either of the operands. Ex: ?min=2 (default is 1)

- (max) Update the maximum allowable random value for either of the operands. Ex: ?max=15 (default is 100)

### '/subtract' Route
#### Returns a random subtraction equation

- (min) Update The minimum allowable random value for either of the operands. Ex: ?min=7 (default is 1)

- (max) Update The maximum allowable random value for either of the operands. Ex: ?max=63 (default is 100)

- (negative)  If present, allows the lefthand operand to be larger than the right hand operand (meaning the resulting answer is a negative number). Ex: ?megative=true

---

Installation Instructions:
- clone down the repo
- cd into repo
- run "npm install" in command line
- run "node server.js" in command line