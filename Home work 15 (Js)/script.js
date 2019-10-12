
  var valueA = parseInt(prompt('please enter value A'));
  var valueB = parseInt(prompt('please enter value B'));
  var valueC = parseInt(prompt('please enter value C'));


function squareEquation(){
    let   Dis =((valueB * valueB)-(4 * valueA * valueC));
    if (Dis > 0 ){
    let   numberX1 = ((- valueB + Math.sqrt(Dis))/(2* valueA));
    let   numberX2 = ((- valueB - Math.sqrt(Dis))/(2* valueA));
     alert('Equation has two roots X1: '+ numberX1 +'  '+'X2: '+ numberX2);
    } else if (Dis == 0){
        let numberX = (-((valueB)/(2*valueA)));
        alert('Equation has only one root X: ' + numberX);
    } else {
        alert('no valid Discriminant : ' + Dis +' (it has to be positive)');
    }
}   
squareEquation();
