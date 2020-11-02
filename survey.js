const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? ', (nameX) => {
  rl.question('What is your superpower? ', (factX) => {
    rl.question('What is your hobby?', (hobby) => {
      rl.question('If you had dinosaur how would you call it?', (dino) => {

      console.log(`My name is ${nameX} and I can ${factX} I am fond of ${hobby}. I have a dino ${dino}, Sounds nice, eh?`);
     
      rl.close();
      });
    });
  });
});