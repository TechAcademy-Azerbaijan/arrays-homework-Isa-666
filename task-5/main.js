const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
   let n = result.input.split(" ") //3 5 -7 7 5 -9 -4
    let arr = [];
    for (let i = 0; i < n.length; i+=2) {
    let element1=parseInt(n[i])
    let element2=parseInt(n[i+1])
    if (element2) {
       arr.push(element2)  
    } 
   
    arr.push(element1);
    
    } 
    console.log(arr.join(' '));
  
});
