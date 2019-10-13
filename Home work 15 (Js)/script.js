
  var valueA = parseInt(prompt('please enter value A'));
  var valueB = parseInt(prompt('please enter value B'));
  var valueC = parseInt(prompt('please enter value C'));

function getDiscriminant(){
    return ((valueB * valueB)-(4 * valueA * valueC));
}
var disc = getDiscriminant()

function squareEquation(discriminant){ //dicriminant-сшитается как (а, б , с)
    if (discriminant > 0 ){
    let   numberX1 = ((- valueB + Math.sqrt(discriminant))/(2* valueA));
    let   numberX2 = ((- valueB - Math.sqrt(discriminant))/(2* valueA));
     alert('Equation has two roots X1: '+ numberX1 +'  '+'X2: '+ numberX2);
     return{
         numberX1,
         numberX2
     }
    } else if (discriminant == 0){
        let numberX = (-((valueB)/(2*valueA)));
        alert('Equation has only one root X: ' + numberX);
        return {
            numberX
        }
    } else {
        alert('no valid Discriminant : ' + discriminant +' (it has to be positive)');
    }
}   
squareEquation(disc); //здесь уже задаем параметры (а, б, с)---(1, 2, 3) при вызове функцийб тоесть disc= у нас расчитывается на верху
