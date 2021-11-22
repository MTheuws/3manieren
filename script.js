
// functie declaratie
function kwadraat1(number1, number2){
    const q1 = number1 * number1;
    const q2 = number2 * number2;
    const sum = q1 + q2;
    const q3 = sum * sum;
    return q3;
    };

    console.log(kwadraat1(2, 6));
    
// functie uitdrukking
const kwadraat2 = function(number1, number2){
    const q1 = number1 * number1;
    const q2 = number2 * number2;
    const sum = q1 + q2;
    const q3 = sum * sum;
    return q3;
    };

    console.log(kwadraat2(2, 6));

// pijlfunctie
const kwadraat3 = (number1, number2) => {
    const q1 = number1 * number1;
    const q2 = number2 * number2;
    const sum = q1 + q2;
    const q3 = sum * sum;
    return q3;
    };

    console.log(kwadraat3(2, 6));