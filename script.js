let money = +prompt("Ваш бюджет на месяц?", " "),
    time = prompt("Введите дату в формате ГГГГ-ММ-ДД", "2019-04-11");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
        b = prompt("Во сколько обойдется?", " ");
        if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50 ) {
            console.log("done");
            appData.expenses.a = b;
    }     
}
//let i = 0;
//while ( i < 2 ) {
//    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//        && a != "" && b != "" && a.length < 50 ) {
//            console.log("done");
//            appData.expenses.a = b;
//            i++;
//    }     
//}
//do {
//     console.log("done");
//     appData.expenses.a = b;
//     i++;
//}         
//while (i < 2)
    
appData.moneyPerDay = appData.budget / 30;
alert("Ваш ежедневный бюджет составляет: " + appData.moneyPerDay + " рублей");
if (appData.moneyPerDay < 100) {
    console.log("Миимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
    console.log("Средний уровень достатка"); 
} else if(appData.moneyPerDay < 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}



