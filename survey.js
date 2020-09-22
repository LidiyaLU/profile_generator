const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (nameX) => {
  rl.question('What is your superpower? ', (factX) => {
      
      console.log("My name is "+ nameX + " and I can " + factX);
     
      rl.close();
  });
});