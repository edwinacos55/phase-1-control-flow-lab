function scuberGreetingForFeet(price){
  // Write your code here!
  if (price <=400 ) {
return 'This one is on me!';
  }
else if(price > 400 && price <= 2000) {
  return 'That will be twenty bucks.';
}
else if (price >2000 && price <=2500) {
return 'I will gladly take your thirty bucks.';
}
else if(price > 2500){
return 'No can do.';
}
}


function ternaryCheckCity(cities){
  // Write your code here!
 return cities === 'NYC'? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tips){
  // Write your code here!
  switch(tips) {
    case 'generous' :
      return 'Thank you so much.'
    
    case 'not as generous':
      return 'Thank you.'
  
    case 'thanks for everything' :
    return  'Bye.'

    default:
  }


}