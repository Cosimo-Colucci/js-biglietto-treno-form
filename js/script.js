const userTripDistance = document.getElementById ("tripDistance");
const Age = document.getElementById ("userAge");
const button = document.querySelector ("button");
let message;

button.addEventListener ("click", function() {

    let price = userTripDistance.value * 0.233;

    if ( Age.value > 125  || Age.value < 0 || isNaN(Age.value)){
           message = 'You have entered an invalid age!'
             price = 0;
         } else if ( Age.value < 18 ){
            message = 'Since your traveler has less than 18 years old, you have a 19.4% discount on the final price.'
            price.toFixed = price - (price * (19.4 / 100));
         } else if ( Age.value >= 65){
           message = 'Since your traveler has more than 65 years old, you have a 37.7% discount on the final price.'
            price.toFixed = price - (price * (37.7 / 100));
         } else {
            message = 'Your traveler has received no discounts on the final price.'
         }
         //document.getElementById('output').innerHTML += price.toFixed(2) +'€' + ' ' + message;
    console.log (price)
})

// if ( inputeAge > 125  || inputeAge < 0 || isNaN(inputeAge)){
//    message = 'You have entered an invalid age!'
    // price = 0;
// } else if ( inputeAge < 18 ){
//    message = 'Since your traveler has less than 18 years old, you have a 19.4% discount on the final price.'
//    price = price - (price * (19.4 / 100));
// } else if ( inputeAge >= 65){
//    message = 'Since your traveler has more than 65 years old, you have a 37.7% discount on the final price.'
//    price = price - (price * (37.7 / 100));
// } else {
//    message = 'Your traveler has received no discounts on the final price.'
// }
// document.getElementById('output').innerHTML += price.toFixed(2) +'€' + ' ' + message;