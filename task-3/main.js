const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    
    let n = result.input.split(" ");
    let arr = [];

    for (let i = 0; i < n.length; i++) {
        arr.push(n[i]);


    } let a=arr.filter(function(i){return i!==arr[1] && i!==arr[3] && i!==arr[5] })

    console.log(a.join(" "));

  
});
