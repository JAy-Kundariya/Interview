var numbers = [123, 234, 521, 158018, 40848, 408, 58238];
var names = ['anay', 'karan', 'sagar', 'dinesh', 'Amit', 'Nikunj', 'ajay'];

function findName(userInput) {
  var inputNumber = userInput.toString();
  var matchedNames = names.filter((name, index) =>
    numbers[index].toString().includes(inputNumber),
  );

  if (matchedNames.length === 0) {
    return 'No name found';
  }

  return matchedNames.sort()[0];
}

var userInput = '23';
var result = findName(userInput);
console.log(result);
