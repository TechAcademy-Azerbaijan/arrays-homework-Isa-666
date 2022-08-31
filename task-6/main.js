const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    
  let n = result.input.split(" ") //6 2 7 1 7 1 2
  let arr = [];
  let max = parseInt(n[0]);
  let min = parseInt(n[0]);
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    const element1 = parseInt(n[i]);
    if (element1 > max) {
      max = element1;
    } else if (element1 < min) {
      min = element1;
    }

  }
  for (let j = 0; j < n.length; j++) {
    const element2 = parseInt(n[j])
    if (element2 !== max && element2 !== min) {
      sum += element2
    }



  }
  console.log(sum);
  
});
