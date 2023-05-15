const distance = parseInt( prompt('Insert the distance of your trip in chilometers'));
const age = parseInt( prompt('Insert the actual age of the traveler'));

let price = distance * 0.233;
let message;

if ( age > 125  || age < 0 || isNaN(age)){
    message = 'You have entered an invalid age!'
    // price = 0;
} else if ( age < 18 ){
    message = 'Since your traveler has less than 18 years old, you have a 19.4% discount on the final price.'
    price = price - (price * (19.4 / 100));
} else if ( age >= 65){
    message = 'Since your traveler has more than 65 years old, you have a 37.7% discount on the final price.'
    price = price - (price * (37.7 / 100));
} else {
    message = 'Your traveler has received no discounts on the final price.'
}

document.getElementById('output').innerHTML += price.toFixed(2) +'€' + ' ' + message;