// Write your code in this file!
function scuberGreetingForFeet(feet){
  if (feet <= 400){
  return "This one is on me!"
  }
  if (feet > 400 && feet <= 2500){
  return "I will gladly take your thirty bucks."
  }
  if (feet > 2500){
  return "No can do."
  }
}

function ternaryCheckCity(city){
  if (city === "NYC"){
  return "Ok, sounds good."
  } else {
  return "No go."
  }
}


function switchOnCharmFromTip(tip){
switch (tip){
  case "generous":
    respond =  "Thank you so much.";
    break;
  case "not as generous":
    respond =  "Thank you.";
    break;
  default:
    respond =  "Bye.";
    break;
  }
}
switchOnCharmFromTip;
