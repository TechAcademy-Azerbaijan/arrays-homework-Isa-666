const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    
    let n = result.input.split(" ");
    let arr = [];

    for (let i = 0; i < n.length; i++) {
        arr.push(n[i]);


    } delete arr[1], delete arr[3], delete arr[5];


    console.log(arr.join(' '));

  
});
