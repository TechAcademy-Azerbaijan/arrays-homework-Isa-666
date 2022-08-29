const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let n = result.input.split(" ");
    let arr = [];
    let count = 0;
    for (let i = 0; i < n.length; i++) {

        arr.push(n[i]);
        count++;

    }


    console.log(count - 1);
  
});
