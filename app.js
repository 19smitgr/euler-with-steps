// given y0, x0, delta x, and dy/dx

let dataEntries = [];
let textDerivative = prompt("derivative function? For instance, if y=2+xy, enter 2+xy");

let x0 = parseFloat(prompt("x0?"));
let y0 = parseFloat(prompt("y0?"));
let x_final = parseFloat(prompt("You want f(?): "));
let dx = parseFloat(prompt("dx?"));
let numIterations = Math.abs(x_final - x0) / dx;

function recurseEuler(x, y, dx, n) {
    let derivative = eval(textDerivative);
    let y_current = y + dx * derivative;
    let x_current = x + dx; // floating pt errors happen here, but it doesn't throw things off
    n--;

    dataEntries.push([10 - (n+1), x_current, y_current]);

    if (n >= 0) {
        return recurseEuler(x_current, y_current, dx, n);
    } else {
        console.table(dataEntries);
        return y_current;
    }
}

console.log(recurseEuler(x0, y0, dx, numIterations));