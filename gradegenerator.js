const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the student's mark (between 0 and 100): ", (mark) => {
    mark = parseInt(mark);
    let grade;

    if (mark >= 80 && mark <= 100) {
        grade = 'A';
    } else if (mark >= 60 && mark < 80) {
        grade = 'B';
    } else if (mark >= 50 && mark < 60) {
        grade = 'C';
    } else if (mark >= 40 && mark < 50) {
        grade = 'D';
    } else if (mark >= 0 && mark < 40) {
        grade = 'E';
    } else {
        console.log("Invalid mark. Please enter a mark between 0 and 100.");
        rl.close();
        return; // Exit the function if the mark is invalid
    }
    console.log(`Grade: ${grade}`);
    rl.close();
});