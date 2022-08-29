const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
        let n = result.input.split(" ");
    let arr = [];
    for (let i = 0; i < n.length; i++) {
        arr.push(n[i]);

    } arr.reverse();
    console.log(arr.join(' '));
  
});
