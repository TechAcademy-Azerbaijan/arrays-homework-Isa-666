const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    
    let numbers = result.input.split(" ");
    let max = parseInt(numbers[0]);
    let index = 0;
    for (let i = 0; i < numbers.length; i++) {
        let element = parseInt(numbers[i])
        if (element > max) {
            max = numbers[i]
            index = i
        }


    } console.log(`${max}\n${index + 1}`);
  
});
