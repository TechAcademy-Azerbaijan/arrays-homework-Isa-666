const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
  let num = result.input.split(" "); //6 -3 5 -5 -4 7 -5
    let min = parseInt(num[0])
    let el=0
    for (let i = num.length-1; i >= 0; i--) {
        const element = parseInt(num[i]);
        if (element <= min) {
            min = element
            el=i
        }
    } 
    [num[0],num[el]] = [num[el],num[0]]
    console.log(num.join(' '));
  
});
