function add(number1, number2) {
    console.log(number1, number2);
    var sum = number1 + number2;
    return sum;
}

var addResult = add(50, 60);
console.log(addResult);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var mygivenTaka = 150;
var singaras = bringSingara(mygivenTaka);
console.log('ami ' + mygivenTaka + ' taka disi, tarport ' + singaras + 'ta singara dise mama, ar oigula khaisi');