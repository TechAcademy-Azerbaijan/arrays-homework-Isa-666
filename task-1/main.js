const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  let numbers = result.input.split(" ");
  let count = parseInt(numbers.length);
  for (let i = 0; i < numbers.length; i++) {
    let element = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      let next_element = numbers[j];
      if (element === next_element) {
        count--;
      }
    }

  }

  console.log(count);
  
});
