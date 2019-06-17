let startBtn = document.getElementById("start"),
    bgtValue = document.getElementsByClassName("budget-value")[0],
    dayBgtValue = document.getElementsByClassName("daybudget-value")[0],
    lvlValue = document.getElementsByClassName("level-value")[0],
    expValue = document.getElementsByClassName("expenses-value")[0],
    optExpValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incValue = document.getElementsByClassName("income-value")[0],
    mSaveValue = document.getElementsByClassName("monthsavings-value")[0],
    ySaveValue = document.getElementsByClassName("yearsavings-value")[0],
    expItem = document.getElementsByClassName("expenses-item"),
    expBtn = document.getElementsByTagName("button")[0],
    optExpBtn = document.getElementsByTagName("button")[1],
    countBtn = document.getElementsByTagName("button")[2],
    optExpItem = document.querySelectorAll (".optionalexpenses-item"),
    inc = document.querySelector ("#income"),
    save = document.querySelector ("#savings"),
    sumValue = document.querySelector ("#sum"),
    percentValue = document.querySelector ("#percent"),
    year = document.querySelector (".year-value"),
    month = document.querySelector (".month-value"),
    day = document.querySelector (".day-value");

expBtn.disabled = true;
optExpBtn.disabled = true;
countBtn.disabled = true;

let money, time;

startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате ГГГГ-ММ-ДД", "2019-06-10");
    money = +prompt("Ваш бюджет на месяц?", " ");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", " ");
    }

    appData.budget = money;
    appData.timeData = time;
    bgtValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();

    expBtn.disabled = false;
    optExpBtn.disabled = false;
    countBtn.disabled = false;
});

expBtn.addEventListener('click', function() {
    let expSum = 0;

    for (let i = 0; i < expItem.length; i++) {
        let a = expItem[i].value,
            b = expItem[++i].value;
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != "" && b != "" && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            expSum += +b;
        } else {
            i = i - 1;
        }
    }
    expValue.textContent = expSum;
});

optExpBtn.addEventListener('click', function() {
    for (let i = 0; i < optExpItem.length; i++) {
        let optexp = optExpItem[i].value;
        appData.optionalExpenses[i] = optexp;
        optExpValue.textContent += appData.optionalExpenses[i] + " ";
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expValue.textContent)  / 30).toFixed();
        dayBgtValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            lvlValue.textContent = "Миимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
            lvlValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            lvlValue.textContent = "Высокий уровень достатка";
        } else {
            lvlValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBgtValue.textContent = "Произошла ошибка";
    }
});

inc.addEventListener('input', function () {
    let items = inc.value;
    appData.income = items.split(", ");
    incValue.textContent = appData.income;
});

save.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value;
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        mSaveValue.textContent = appData.monthIncome.toFixed(1);
        ySaveValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value;
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        mSaveValue.textContent = appData.monthIncome.toFixed(1);
        ySaveValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};