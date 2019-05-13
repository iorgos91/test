let start = document.getElementById("start"),
    bgtValue = document.getElementsByClassName("budget-value"),
    dayBgtValue = document.getElementsByClassName("daybudget-value"),
    lvlValue = document.getElementsByClassName("level-value"),
    expValue = document.getElementsByClassName("expenses-value"),
    optExpValue = document.getElementsByClassName("optionalexpenses-value"),
    incValue = document.getElementsByClassName("income-value"),
    mSaveValue = document.getElementsByClassName("monthsavings-value"),
    ySaveValue = document.getElementsByClassName("yearsavings-value"),
    expItem = document.getElementsByClassName("expenses-item"),
    expBtn = document.getElementsByTagName("button")[0],
    optExpBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optExpItem = document.querySelectorAll (".optionalexpenses-item"),
    inc = document.querySelector ("#income"),
    save = document.querySelector ("#savings"),
    sum = document.querySelector ("#sum"),
    percent = document.querySelector ("#percent"),
    year = document.querySelector (".year-value"),
    month = document.querySelector (".month-value"),
    day = document.querySelector (".day-value");

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "60000");
    time = prompt("Введите дату в формате ГГГГ-ММ-ДД", "2019-04-30");

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
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
                b = prompt("Во сколько обойдется?", " ");
            if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
                a != "" && b != "" && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш ежедневный бюджет составляет: " + appData.moneyPerDay + " рублей");
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Миимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay < 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма Ваших накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let optexp = prompt("Введите сумму необязательных расходов в этом месяце", " ");
            appData.optionalExpenses[i] = optexp;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt("Что приносит дополнительный доход? (Перечислите через запятую)", "");
        if (typeof (items) != "string" || typeof (items) == null || items == "") {
            console.log ("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }
        appData.income.forEach (function (item, i) {
            alert ("Способы дополнительного зароботка: " + (i+1) + ". "+ item);
        });
    }
};

for (let key in appData) {
    console.log ("Наша программа включает в себя данные:" + key + " - " + appData[key]);
}




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