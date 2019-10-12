/*Создайте страницу, которая запрашивает x и n, а затем выводит в div с h2 элементом результат
(элемент может существовать на странице или может быть создан с помощью
document.createElement). Выполнение задание состоит из следующих шагов (линки имеют
дополнительную информацию):
1.1. Запросить число x которое нужно возвести в степень: prompt
1.2. Запросить степень n в которую нужно возвести число: prompt
1.3. Преобразовать введенные строки в числа: parseInt
1.4. Вычислить результат : Math.pow
1.5. Вывести строку результата на страницу в элемент div > h2 и через alert() в следующем
формате:
Result of x = <число введенное> in power of n = <число введенное>
equals <result> */ 
let valueX ;

let valueN ;
 let Result;
 valueX = parseInt (prompt('please enter X value'));
 valueN = parseInt (prompt('please enter the power of N'));
 Result = Math.pow(valueX, valueN);
 alert('Result of x = ' + valueX +' '+'in power of n = ' + valueN + ' ' + 'equals'+ ' '+ Result + ' '+'Result');
 document.getElementById("demo") .innerHTML = 
 'Result of x = ' + valueX +' '+'in power of n = ' + valueN + ' ' + 'equals'+ ' '+ Result + ' '+'Result';
