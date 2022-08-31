const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
      let numbers = result.input.split(" "); //14 16 3 7 17 19 9
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (i % 2 == 0) {
            arr.push(numbers[i])
        }

    }
    console.log(arr.join(' '));

  
});
