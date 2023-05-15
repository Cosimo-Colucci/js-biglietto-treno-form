const userTripDistance = document.getElementById (tripDistance);
const Age = document.getElementById (userAge);
const button = document.querySelector ("button")
let price = userTripDistance * 0.233;
let message;

button.addEventListener ("click", function() {
    userTripDistance
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