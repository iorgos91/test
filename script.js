let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", " ");
    time = prompt("Введите дату в формате ГГГГ-ММ-ДД", "2019-04-11");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", " ");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
            b = prompt("Во сколько обойдется?", " ");
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses.a = b;
        } else {
            console.log("bad result");
            i--;
        }
    }
}

chooseExpenses();

function chooseOptExpenses () {
    for (let i = 0; i < 3; i++) {
        let optexp = prompt("Введите сумму необязательных расходов в этом месяце", " ");
        if (typeof (optexp) === "string" && typeof (optexp) != null 
            && optexp != "" && optexp.length < 50) {
            appData.optionalExpenses[i] = optexp;
            console.log(appData.optionalExpenses);
        } else {
            console.log("bad result");
            i--;
        }
    }
}


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш ежедневный бюджет составляет: " + appData.moneyPerDay + " рублей");
}

detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log("Миимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay < 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel ();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма Ваших накоплений?", ""),
            percent = +prompt("Под какой процент?", "");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();






/* К УРОКУ С ЦИКЛАМИ (№3)
let i = 0;
while ( i < 2 ) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
        b = prompt("Во сколько обойдется?", " ");
    if ( typeof(a) === "string" && typeof(a) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50 ) {
            console.log("done");
            appData.expenses.a = b;
        } else {
            console.log("bad result");
            i--;
        }
    i++;  
}
*/

/*
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
        b = prompt("Во сколько обойдется?", " ");
    if ( typeof(a) === "string" && typeof(a) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50 ) {
            console.log("done");
            appData.expenses.a = b;
        } else {
        console.log("bad result");
        i--;
        }
    i++;
}         
while (i < 2);
*/