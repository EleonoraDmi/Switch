let tip;
let bill;
let amount = 275;

switch(true) {
    case (amount < 50):
        console.log("Bill: " + (bill = amount + (tip = amount*0.2)) + " = " + amount + " (amount)" + " + " + tip + " (tip)");
    break;
    case (amount >= 50 && amount <= 300):
        console.log("Bill: " + (bill = amount + (tip = amount*0.15)) + " = " + amount + " (amount)" + " + " + tip + " (tip)");
    break;
    case (amount > 300):
        console.log("Bill: " + (bill = amount + (tip = amount*0.2)) + " = " + amount + " (amount)" + " + " + tip + " (tip)");
    break;
}

amount = 40;

switch(true) {
    case (amount < 50):
        console.log("Bill: " + (bill = amount + (tip = amount*0.2)) + " = " + amount + " (amount)" + " + " + tip + " (tip)");
    break;
    case (amount >= 50 && amount <= 300):
        console.log("Bill: " + (bill = amount + (tip = amount*0.15)) + " = " + amount + " (amount)" + " + " + tip + " (tip)");
    break;
    case (amount > 300):
        console.log("Bill: " + (bill = amount + (tip = amount*0.2)) + " = " + amount + " (amount)" + " + " + tip + " (tip)");
    break;
}

amount = 430;

switch(true) {
    case (amount < 50):
        console.log("Bill: " + (bill = amount + (tip = amount*0.2)) + " = " + amount + " (amount)" + " + " + tip + " (tip)");
    break;
    case (amount >= 50 && amount <= 300):
        console.log("Bill: " + (bill = amount + (tip = amount*0.15)) + " = " + amount + " (amount)" + " + " + tip + " (tip)");
    break;
    case (amount > 300):
        console.log("Bill: " + (bill = amount + (tip = amount*0.2)) + " = " + amount + " (amount)" + " + " + tip + " (tip)");
    break;
}