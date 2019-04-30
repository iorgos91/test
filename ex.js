console.log ("" + 1 + 0); //10
console.log ("" - 1 + 0); //-1
console.log(true + false); //true ошибка 1
console.log(6 / "3"); //NaN ошибка 2
console.log("2" * "3"); //23 ошибка 6
console.log(4 + 5 + "px"); //9px
console.log("$" + 4 + 5); //$45 
console.log("4" - 2);//NaN ошибка 2
console.log("4px" - 2);//NaN 
console.log(7 / 0);//Infinity 
console.log("  -9\n" + 5);//4 - ошибка -9\n5
console.log("  -9\n" - 5);//NAN - ошибка -14
console.log(5 && 2);//2
console.log(2 && 5);//5
console.log(5 || 0);//5
console.log(0 || 5);//5
console.log(null + 1);//1
console.log(undefined + 1);//NaN
console.log(null == "\n0\n");//true ошибка false (null == только undefined)
console.log(+null == +"\n0\n");//true

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) 
    console.log (i);
}
    
let i = 0;
while (i < 3) {
    console.log ( "номер " + i + "!" );
    i++;
  }

let num;
do {
    num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);

//упражнение на вывод натуральных чисел, разобраться
nextPrime:
  for (let i = 2; i <= 10; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // простое
  }



let browser = prompt ("Каким браузером вы пользуетесь?", " ");
if (browser === "IE") {
    alert ("О, да у вас IE")
  } else if ( browser === "Chrome" 
  || browser === "Firefox"
  || browser === "Safari"
  || browser === "Opera" ) {
    alert ("Да, и эти браузеры мы поддерживаем")
  } else {
    alert ("Мы надеемся, что и в вашем браузере все ок!")
  } 


switch (a) {
    case 0 :
        alert ( 0 );
        break;
    case 1 :
        alert ( 1 );
        break;
    case 2 :
    case 3 :
        alert( "2,3" );
        break;
}
parseFloat ()