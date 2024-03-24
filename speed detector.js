//prompt the user to input the speed of the car

const prompt =("prompt.sync")({sigint:true});
 
 const speed=("Enter the speed of the car")("speed of the car =km/hr")  
  

function speedOfTheCar(speed){
  let response = "";
  // To avoid negative number
  if (speed <=70){
    return 'Okay'
  }
    
    let deductionperpiont= 5;
    let diff =speed-70;

    demerits =Math.floor(diff/ deductionperpiont);
    
    if(demerits>12){
      return 'licences suspend'
    

  } 
}