const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
       let num = result.input.split(' ');//6 -3 7 -4 7 4 -5
    let max = parseInt(num[0])
    let index = 0;

    for (let i = 0; i < num.length; i++) {
        let element1 = parseInt(num[i]);
        if (element1 >= max) {
            max = element1
            index = i
        }
    }
    [num[num.length - 1], num[index]] = [max, num[num.length-1]]
    console.log(num.join(' '));
  
});
