//Prompt the user to input the student marks.

const prompt =("prompt.sync")({sigint:true});

const marks=("Enter student mark.")

function generatestudentgrade (marks){
  if (marks >79){
    return 'A'
  } else if(marks = 60 < 79){
      return 'B'
  } else if(marks = 49 < 60){
     return 'C'
  } else if (marks = 40 < 49){
     return 'D'
  } else {
    return 'E';
  }
}