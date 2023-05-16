const userTripDistance = document.getElementById ("tripDistance");
const Age = document.getElementById ("userAge");
const button = document.querySelector ("button");
const resetButton = document.getElementById ("button.reset");
let message;

button.addEventListener ("click", function() {

    let price = userTripDistance.value * 0.233;

    if ( Age.value > 125  || Age.value < 0 || isNaN(Age.value)){
           message = 'You have entered an invalid age!'
             price = 0;
         } else if ( Age.value < 18 ){
            message = 'Since your traveler has less than 18 years old, you have a 19.4% discount on the final price.'
            price = price - (price * (19.4 / 100));
         } else if ( Age.value >= 65){
           message = 'Since your traveler has more than 65 years old, you have a 37.7% discount on the final price.'
            price = price - (price * (37.7 / 100));
         } else {
            message = 'Your traveler has received no discounts on the final price.'
         }

    document.getElementById('output').innerHTML = "Your ticket costs is" + " " + price.toFixed(2) +'€' + ' ' + message;
    console.log (price.toFixed(2))
})

resetButton.addEventListener ("click", function() {
    userTripDistance.value = "";
    Age.value = "";

})
