const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
  mark = parseInt(mark);
  let grade;  
if (marks >79){
  return 'A'
} else if(marks >= 60 && marks <=79){
  grade ='B'
} else if(marks >= 49 && marks < 60){
  grade ='C'
} else if (marks >= 40 && marks < 49){
   grade = 'D'
} else if (marks < 40){
  grade ='E';
}
console.log(`Grade: ${grade}`);
    rl.close();
});
