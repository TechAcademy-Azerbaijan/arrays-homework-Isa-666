const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
       let n = result.input.split(" ") //3 5 -7 7 5 -9 -4
    let arr = [];
    for (let i = 0; i < n.length; i++) {
        arr.push(n[i]);

    }
    [arr[0], arr[1]] = [arr[1], arr[0]];
    [arr[2], arr[3]] = [arr[3], arr[2]];
    [arr[4], arr[5]] = [arr[5], arr[4]];

    console.log(arr.join(' '));
  
});
