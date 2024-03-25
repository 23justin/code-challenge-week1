const prompt = require("prompt-sync")({ sigint: true });

//prompt the user to input the speed of the car
 
const speed = parseFloat(prompt("Enter the speed of the car (in km/h):"))  
  

function speedOfTheCar(speed){
  let response = "";
  // To avoid negative number
  if (speed <=70){
    return 'Okay'
  }
    
    const deductionperpiont= 5;
    const diff =speed-70;

    const demerits =Math.floor(diff/ deductionperpiont);
    
    if (demerits>=12){
      return 'licences suspend'
    

    } else {
      return 'Points: ' + demerits;
  }
}

// Output the result based on the speed of the car
console.log(speedOfTheCar(speed));