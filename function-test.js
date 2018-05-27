function makeSandwichWith(filling) {
  var sicksandwich = ['bread', 'butter', 'pickles', 'jam'];
  sicksandwich.push(filling);
  return console.log("Here you go, your", filling, "sandwich is ready. It is made out of", sicksandwich);
}

makeSandwichWith('mushroom')

function sayHiTo(person) {
    console.log('hi', person);
}

sayHiTo('Anita')