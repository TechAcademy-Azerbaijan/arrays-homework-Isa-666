const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
        let numbers = result.input.split(" "); //14 16 3 7 17 19 9
    let arr = [];

    for (let i = 0; i < numbers.length; i++) {
        const element = parseInt(numbers[i]);
        const element2 = parseInt(numbers[i + 1]);
        if (element2 > element) {
            arr.push(element2)
        }
    }
    console.log(arr.join(' '));
  
});
