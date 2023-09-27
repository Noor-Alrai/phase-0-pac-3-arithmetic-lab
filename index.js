function add(number1 ,number2){

    return number1 + number2

}
function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1,number2){
    return number1 * number2;
}
function divide(number1,number2){
    return number1 / number2;
}
add(2,3);
subtract(3,1);
multiply(5,5);
divide(5,5);

function increment(n){
    return ++n; 
}
function  decrement(n){
    return --n;
}
function makeInt(n){
    n= parseInt(n);
    return n;
}
function makeInt(n){
    n = parseInt(n,10)
    return n;
}
function preserveDecimal(n){
    n = parseFloat(n);
    return n;
}